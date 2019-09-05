import { Router } from 'express';
import UsersController from '../controllers/userController';

const userRoutes = Router();

// user routes
userRoutes.post('/', UsersController.getAllUsers);
// userRoutes.post('/:id', UsersController.getSingleUser);
// userRoutes.patch('/:id', UsersController.changeToMentor);

export default userRoutes;
