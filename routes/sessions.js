import { Router } from 'express';
import UsersController from '../controllers/userController';
import verifyToken from '../middleware/verifyToken';
import { checkforMentor } from '../middleware/getUserRole';

const sessionsReject = Router();

sessionsReject.patch('/:id/reject', verifyToken, checkforMentor, UsersController.rejectRequest);

export default sessionsReject;
