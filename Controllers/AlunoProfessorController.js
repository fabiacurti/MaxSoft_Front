import AlunoProfessor from '../Models/AlunoProfessor.js';
import AlunoProfessorBase from '../Infra/AlunoProfessorBase.js';
export default class AlunoProfessorController {
  constructor() {
    this.alunoProfessorBase  = new AlunoProfessorBase();
  }

  async incluirAlunoProfessor(req, res) {
    try {
      const { nome, cpf, dataNascimento, sala, email, cidade, rua, numero, cep, tipoPessoa } = req.body;
      const alunoProfessor = new AlunoProfessor(nome, cpf, dataNascimento, sala, email, cidade, rua, numero, cep, tipoPessoa);
      await this.alunoProfessorBase .incluir(alunoProfessor);
      res.status(201).json({ message: 'Aluno/Professor inserido com sucesso.' });
    } catch (error) {
      console.error('Erro ao incluir Aluno/Professor:', error);
      res.status(500).json({ error: 'Erro ao incluir Aluno/Professor.' });
    }
  }

  async atualizarAlunoProfessor(req, res) {
    try {
      const { cpf } = req.params;
      const { nome, dataNascimento, sala, email, cidade, rua, numero, cep, tipoPessoa } = req.body;
      const alunoProfessor = new AlunoProfessor(nome, cpf, dataNascimento, sala, email, cidade, rua, numero, cep, tipoPessoa);
      await this.alunoProfessorBase .atualizar(alunoProfessor);
      res.json({ message: 'Aluno/Professor atualizado com sucesso.' });
    } catch (error) {
      console.error('Erro ao atualizar Aluno/Professor:', error);
      res.status(500).json({ error: 'Erro ao atualizar Aluno/Professor.' });
    }
  }

  async excluirAlunoProfessor(req, res) {
    try {
      const { cpf } = req.params;
      await this.alunoProfessorBase .excluir(cpf);
      res.json({ message: 'Aluno/Professor excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir Aluno/Professor:', error);
      res.status(500).json({ error: 'Erro ao excluir Aluno/Professor.' });
    }
  }

  async consultarAlunosProfessores(req, res) {
    try {
      const termo = req.query.termo || '';
      const alunosProfessores = await this.alunoProfessorBase .consultar(termo); 
      res.json(alunosProfessores);
    } catch (error) {
      console.error('Erro ao consultar Alunos/Professores:', error);
      res.status(500).json({ error: 'Erro ao consultar Alunos/Professores.' });
    }
  }

}
