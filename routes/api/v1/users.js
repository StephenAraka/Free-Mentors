const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const users = require('../../../src/Users');

// get all users
router.get('/', (req, res) => {
    res.json(users);
});


// get single user
router.get('/:id', (req, res) => {
    const found = users.some((user) => user.userId === parseInt(req.params.id, 10));

    if (found) {
        res.status(200).json(users.filter((user) => user.userId === parseInt(req.params.id, 10)));
    } else {
        res.status(400).json({ msg: `Not found user with the id of ${req.params.id}` });
    }
});

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
        res.status(400).json({ msg: 'Please include names and email' });
    } else {
        users.push(newUser);
        res.json(users);
        // res.redirect('/');
    }
});

// Update a user
router.put('/:id', (req, res) => {
    const found = users.some((user) => user.userId === parseInt(req.params.id, 10));

    if (found) {
        const updateUser = req.body;
        users.forEach((user) => {
            if (user.userId === parseInt(req.params.id, 10)) {
                user.firstName = updateUser.firstName ? updateUser.firstName : user.firstName;
                user.lastName = updateUser.lastName ? updateUser.lastName : user.lastName;
                user.email = updateUser.email ? updateUser.email : user.email;
                user.address = updateUser.address ? updateUser.address : user.address;
                user.bio = updateUser.bio ? updateUser.bio : user.bio;
                user.occupation = updateUser.occupation ? updateUser.occupation : user.occupation;
                user.expertise = updateUser.expertise ? updateUser.expertise : user.expertise;

                res.json({ msg: 'user updated', user });
            }
        });
    } else {
        res.status(400).json({ msg: `Not found user with the id of ${req.params.id}` });
    }
});


module.exports = router;
