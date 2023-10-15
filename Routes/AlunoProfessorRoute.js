import express from 'express';
import AlunoProfessorController from '../Controllers/AlunoProfessorController.js';

const alunoProfessorController = new AlunoProfessorController();
const router = express.Router();

export default function createAlunoProfessorRoutes(alunoProfessorController) {
    router.post('/alunoProfessor', (req, res) => alunoProfessorController.incluirAlunoProfessor(req, res));
    router.put('/alunoProfessor/:cpf', (req, res) => alunoProfessorController.atualizarAlunoProfessor(req, res));
    router.delete('/alunoProfessor/:cpf', (req, res) => alunoProfessorController.excluirAlunoProfessor(req, res));
    router.get('/alunoProfessor', (req, res) => alunoProfessorController.consultarAlunosProfessores(req, res));
    

  return router;
}

