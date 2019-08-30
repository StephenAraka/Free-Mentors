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

// create a mentor
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
        role: 'mentor'
    };

    if (!newMentor.firstName || !newMentor.lastName || !newMentor.email) {
        res.status(400).json({ msg: 'Please include names and email' });
    } else {
        mentors.push(newMentor);
        res.json(mentors);
        // res.redirect('/');
    }
});

// Update a mentor
router.put('/:id', (req, res) => {
    const found = mentors.some((mentor) => mentor.mentorId === parseInt(req.params.id, 10));

    if (found) {
        const updateMentor = req.body;
        mentors.forEach((mentor) => {
            if (mentor.mentorId === parseInt(req.params.id, 10)) {
                mentor.firstName = updateMentor.firstName ? updateMentor.firstName : mentor.firstName;
                mentor.lastName = updateMentor.lastName ? updateMentor.lastName : mentor.lastName;
                mentor.email = updateMentor.email ? updateMentor.email : mentor.email;
                mentor.address = updateMentor.address ? updateMentor.address : mentor.address;
                mentor.bio = updateMentor.bio ? updateMentor.bio : mentor.bio;
                mentor.occupation = updateMentor.occupation ? updateMentor.occupation : mentor.occupation;
                mentor.expertise = updateMentor.expertise ? updateMentor.expertise : mentor.expertise;

                res.json({ msg: 'mentor updated', mentor });
            }
        });
    } else {
        res.status(400).json({ msg: `Not found mentor with the id of ${req.params.id}` });
    }
});

// delete a mentor
router.delete('/:id', (req, res) => {
    const found = mentors.some((mentor) => mentor.mentorId === parseInt(req.params.id, 10));

    if (found) {
        res.json({ msg: 'mentor deleted', mentors: mentors.filter((mentor) => mentor.mentorId !== parseInt(req.params.id, 10)) });
    } else {
        res.status(400).json({ msg: `Not found mentor with the id of ${req.params.id}` });
    }
});

module.exports = router;
