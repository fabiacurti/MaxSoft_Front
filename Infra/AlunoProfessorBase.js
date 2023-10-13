import AlunoProfessor from '../Models/AlunoProfessor.js';
import conectar from './db.js';

export default class AlunoProfessorBase{

    async incluir(alunoProfessor){
        if(alunoProfessor instanceof AlunoProfessor){
            const conexao =await conectar();
            const sql="INSERT INTO AlunosProfessores (Nome, CPF, DataNascimento, Sala, Email, Cidade, Rua, Numero, CEP, TipoPessoa) VALUES (?,?,?,?,?,?,?,?,?,?)"
            const valores = [alunoProfessor.Nome, alunoProfessor.CPF, alunoProfessor.DataNascimento, alunoProfessor.Sala, alunoProfessor.Email, alunoProfessor.Cidade, alunoProfessor.Rua, alunoProfessor.Numero, alunoProfessor.CEP, alunoProfessor.TipoPessoa];
            await conexao.query(sql,valores);
        }
    }
    async atualizar(alunoProfessor) {
        if (alunoProfessor.CPF) {
            const conexao = await conectar();
            const sql = "UPDATE AlunosProfessores SET Nome = ?, DataNascimento = ?, Sala = ?, Email = ?, Cidade = ?, Rua = ?, Numero = ?, CEP = ?, TipoPessoa = ? WHERE CPF = ?";
            const valores = [alunoProfessor.Nome, alunoProfessor.DataNascimento, alunoProfessor.Sala, alunoProfessor.Email, alunoProfessor.Cidade, alunoProfessor.Rua, alunoProfessor.Numero, alunoProfessor.CEP, alunoProfessor.TipoPessoa, alunoProfessor.CPF];
            await conexao.query(sql, valores);
        }
    }

    async excluir(cpf) {
        if (cpf) {
            const conexao = await conectar();
            const sql = "DELETE FROM AlunosProfessores WHERE CPF = ?";
            const valores = [cpf];
            await conexao.query(sql, valores);
        }
    }

    async consultar(termo) {
        const conexao = await conectar();
        const sql = "SELECT * FROM AlunosProfessores WHERE Nome LIKE ? OR CPF LIKE ?"; 
        const valores = [`%${termo}%`, `%${termo}%`];
        const [alunosProfessores] = await conexao.query(sql, valores);
        return alunosProfessores;
    }
    
}