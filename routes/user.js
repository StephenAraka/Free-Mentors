import { Router } from 'express';
import UsersController from '../controllers/userController';
import verifyToken from '../middleware/verifyToken';
// import checkforUser from '../middleware/getUserRole';
import { checkforAdmin, checkforUser, checkforMentor } from '../middleware/getUserRole';

const userRoutes = Router();
const mentorRoutes = Router();
const sessionsRoutes = Router();

// user routes
userRoutes.get('/', verifyToken, checkforAdmin, UsersController.getAllUsers);
userRoutes.patch('/:id', verifyToken, checkforAdmin, UsersController.changeToMentor);

// mentor routes
mentorRoutes.get('/', verifyToken, checkforUser, UsersController.getAllMentors);
mentorRoutes.get('/:id', verifyToken, checkforUser, UsersController.getSpecificMentor);


// sessions routes
sessionsRoutes.post('/', verifyToken, checkforUser, UsersController.createSession);
sessionsRoutes.patch('/:id/accept', verifyToken, checkforMentor, UsersController.acceptRequest);

export { userRoutes, mentorRoutes, sessionsRoutes };
