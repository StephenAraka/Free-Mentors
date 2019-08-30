const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const users = require('../../../../src/Users');

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

module.exports = router;
