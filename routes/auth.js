import { Router } from 'express';
import SignUpController from '../controllers/auth/signupController';
import SignInController from '../controllers/auth/signinController';

const signUpRoute = Router();
const signInRoute = Router();

// sign up
signUpRoute.post('/', SignUpController.signUp);

// sign in
signInRoute.post('/', SignInController.signIn);

export { signUpRoute, signInRoute };
