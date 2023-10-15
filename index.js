import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import AlunoProfessorRoutes from './Routes/AlunoProfessorRoute.js';
import AlunoProfessorController from './Controllers/AlunoProfessorController.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'seu_segredo_de_sessao',
  resave: false,
  saveUninitialized: true,
}));

const alunoProfessorController = new AlunoProfessorController();

app.use('/api', AlunoProfessorRoutes(alunoProfessorController));

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
