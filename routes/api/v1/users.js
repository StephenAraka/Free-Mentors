const express = require('express');
// const uuid = require('uuid');

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

module.exports = router;
