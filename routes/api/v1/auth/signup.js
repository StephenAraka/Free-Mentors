const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const users = require('../../../../src/Users');

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

module.exports = router;
