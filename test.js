import AlunoProfessor from './Models/AlunoProfessor.js'

let objAlunoProfessor = new AlunoProfessor(
  'João Silva', '12345678901', '1990-05-15', 'Sala A', 'joao@example.com', 'São Paulo', 'Avenida Principal', '123', '12345678', 'Aluno'
)

objAlunoProfessor.gravar().then(() => {
  console.log("O aluno/professor foi inserido com sucesso.")
});