const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const path = require('path');
const db = require(path.resolve(__dirname, './Infra/db'));


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

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
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
  res.sendFile(__dirname + '/cadastroAluno.html');
});

app.get('/cadastroLivros.html', verificaAutenticacao, (req, res) => {
  res.sendFile(__dirname + '/cadastroLivros.html');
});

app.get('/cadastroAluno-Professor.html', verificaAutenticacao, (req, res) => {
  res.sendFile(__dirname + '/cadastroAluno-Professor.html');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});

