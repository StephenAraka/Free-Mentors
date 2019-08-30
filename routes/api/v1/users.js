const express = require('express');
// const uuid = require('uuid');

const router = express.Router();
const users = require('../../../src/Users');

// get all users
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;
