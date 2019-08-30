const express = require('express');
// const uuid = require('uuid');

const router = express.Router();
const mentors = require('../../../src/Mentors');

// get all mentors
router.get('/', (req, res) => {
    res.json(mentors);
});


// get single mentor
router.get('/:id', (req, res) => {
    const found = mentors.some((mentor) => mentor.mentorId === parseInt(req.params.id, 10));

    if (found) {
        res.status(200).json(mentors.filter((mentor) => mentor.mentorId === parseInt(req.params.id, 10)));
    } else {
        res.status(400).json({ msg: `Not found mentor with the id of ${req.params.id}` });
    }
});

module.exports = router;
