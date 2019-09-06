import { Router } from 'express';
import UsersController from '../controllers/userController';
import verifyToken from '../middleware/verifyToken';
import { checkforUser } from '../middleware/getUserRole';

const sessionsReject = Router();

sessionsReject.patch('/:id/reject', verifyToken, checkforUser, UsersController.rejectRequest);

export default sessionsReject;
