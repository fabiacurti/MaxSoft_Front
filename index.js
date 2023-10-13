import AlunoProfessor from './Models/AlunoProfessor.js'

let objAlunoProfessor = new AlunoProfessor(
  'João Silva', '12345678901', '1990-05-15', 'Sala A', 'joao@example.com', 'São Paulo', 'Avenida Principal', '123', '12345678', 'Aluno'
)

objAlunoProfessor.gravar().then(() => {
  console.log("O aluno/professor foi inserido com sucesso.")
});import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db from './Infra/db';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'seu_segredo_de_sessao',
  resave: false,
  saveUninitialized: true,
}));

const verificaAutenticacao = (req, res, next) => {
  if (req.session.authenticated) {
    next();
  } else {
    res.redirect('/login');
  }
};

app.use(express.static(path.join(__dirname, 'View')));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'login.html'));
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === 'maxsoft' && password === 'adm123') {
    req.session.authenticated = true;
    res.redirect('/cadastroAluno.html');
  } else {
    res.status(401).send('Nome de usuário ou senha incorretos.');
  }
});

app.get('/cadastroAluno.html', verificaAutenticacao, (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cadastroAluno.html'));
});

app.get('/cadastroLivros.html', verificaAutenticacao, (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cadastroLivros.html'));
});

app.get('/cadastroAluno-Professor.html', verificaAutenticacao, (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'cadastroAluno-Professor.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
