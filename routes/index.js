import { Router } from 'express';
import UsersController from '../controllers/userController';

const routes = Router();

routes.post('/', UsersController.getAllUsers);
routes.post('/:id', UsersController.getSingleUser);
routes.patch('/:id', UsersController.changeToMentor);

export default routes;
