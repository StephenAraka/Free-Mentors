import { Router } from 'express';
import SignUpController from '../controllers/auth/signupController';
import SignInController from '../controllers/auth/signinController';
import AdminSignInController from '../controllers/auth/adminLoginController';

const signUpRoute = Router();
const signInRoute = Router();
const adminRoute = Router();

// sign up
signUpRoute.post('/', SignUpController.signUp);

// sign in
signInRoute.post('/', SignInController.signIn);
adminRoute.post('/', AdminSignInController.signIn);

export { signUpRoute, signInRoute, adminRoute };
