import { Router } from 'express';
import UsersController from '../controllers/userController';
import verifyToken from '../middleware/verifyToken';
// import checkforUser from '../middleware/getUserRole';
import { checkforAdmin, checkforUser } from '../middleware/getUserRole';

const userRoutes = Router();
const mentorRoutes = Router();

// user routes
userRoutes.get('/', verifyToken, checkforAdmin, UsersController.getAllUsers);
mentorRoutes.get('/', verifyToken, checkforUser, UsersController.getAllMentors);
mentorRoutes.get('/:id', verifyToken, checkforUser, UsersController.getSpecificMentor);
// userRoutes.post('/:id', UsersController.getSingleUser);
userRoutes.patch('/:id', verifyToken, checkforAdmin, UsersController.changeToMentor);

export { userRoutes, mentorRoutes };
