import { Router } from 'express';
import UsersController from '../controllers/userController';
// import verifyToken from '../controllers/auth/verifyToken';

const userRoutes = Router();

// user routes
userRoutes.get('/', UsersController.getAllUsers);
// userRoutes.post('/:id', UsersController.getSingleUser);
// userRoutes.patch('/:id', UsersController.changeToMentor);

export default userRoutes;
