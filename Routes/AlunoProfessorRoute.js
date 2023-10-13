import express from 'express';
import AlunoProfessorController from '../Controllers/AlunoProfessorController.js';

const alunoProfessorController = new AlunoProfessorController();

const router = express.Router();

router.post('/alunoProfessor', alunoProfessorController.incluirAlunoProfessor);

router.put('/alunoProfessor/:cpf', alunoProfessorController.atualizarAlunoProfessor);

router.delete('/alunoProfessor/:cpf', alunoProfessorController.excluirAlunoProfessor);

router.get('/alunoProfessor', alunoProfessorController.consultarAlunosProfessores);

export default router;
