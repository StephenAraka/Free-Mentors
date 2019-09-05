import { Router } from 'express';
import SignUpController from '../controllers/auth/signupController';

const signUpRoute = Router();

// sign up
signUpRoute.post('/', SignUpController.signUp);

export default signUpRoute;
