import { Router } from 'express';
import uuid from 'uuid';
import users from '../../../../src/Users';

const router = Router();
// create a user
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const user = users.find(
            (user) => user.email === email && user.password === password // TODO: hash
        );

        if (user) {
            return res.json({ status: 200, message: 'User is successfully logged in', data: { token: uuid.v4() } });
        }
    }

    return res.json({ status: 401, message: 'Incorrect email or password' });
});

export default router;
