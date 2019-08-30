const express = require('express');
const uuid = require('uuid');

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

// create a user
router.post('/', (req, res) => {
    const newMentor = {
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

    if (!newMentor.firstName || !newMentor.lastName || !newMentor.email) {
        res.status(400).json({ msg: 'Please include names and email' });
    } else {
        mentors.push(newMentor);
        res.json(mentors);
        // res.redirect('/');
    }
});

module.exports = router;
