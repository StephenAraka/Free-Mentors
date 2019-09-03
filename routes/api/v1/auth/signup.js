import { Router } from 'express';
import uuid from 'uuid';
import users from '../../../../src/Users';

const router = Router();

// create a user
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: 'secret',
        address: req.body.address,
        bio: req.body.bio,
        occupation: req.body.occupation,
        expertise: req.body.expertise,
        role: 'user'
    };

    if (!newUser.firstName || !newUser.lastName || !newUser.email) {
        res.json({ status: 400, message: 'Please include names and email' });
    } else {
        users.push(newUser);
        res.json({ status: 201, message: 'User created successfully', data: users });
        // res.redirect('/');
    }
});

export default router;
