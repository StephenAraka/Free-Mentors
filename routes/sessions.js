import { Router } from 'express';
import UsersController from '../controllers/userController';
import verifyToken from '../middleware/verifyToken';
<<<<<<< HEAD
import { checkforMentor } from '../middleware/getUserRole';
=======
import { checkforUser } from '../middleware/getUserRole';
>>>>>>> 9fdb83da785261013da6ab50b7a7d8e983eef777

const sessionsReject = Router();

sessionsReject.patch('/:id/reject', verifyToken, checkforMentor, UsersController.rejectRequest);

export default sessionsReject;
