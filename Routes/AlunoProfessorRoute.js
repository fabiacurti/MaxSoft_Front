import express from 'express';
import AlunoProfessorRoutes from './Routes/AlunoProfessorRoute.js';

const AlunoProfessorRoutes = new AlunoProfessorController();

const router = express.Router();

router.post('/alunoProfessor', AlunoProfessorRoutes.incluirAlunoProfessor);

router.put('/alunoProfessor/:cpf', AlunoProfessorRoutes.atualizarAlunoProfessor);

router.delete('/alunoProfessor/:cpf', AlunoProfessorRoutes.excluirAlunoProfessor);

router.get('/alunoProfessor', AlunoProfessorRoutes.consultarAlunosProfessores);

export default router;
