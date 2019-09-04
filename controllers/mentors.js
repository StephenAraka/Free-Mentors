import { Router } from 'express';
import uuid from 'uuid';
import mentors from '../dummyData/Mentors';
// import verifyToken from './auth/verifyToken';

const router = Router();

// get all mentors
router.get('/', (req, res) => {
    res.json({ status: 200, data: [mentors] });
});


// get single mentor
router.get('/:id', (req, res) => {
    const found = mentors.some((mentor) => mentor.mentorId === parseInt(req.params.id, 10));

    if (found) {
        res.json({ status: 200, message: 'Mentor found', data: mentors.filter((mentor) => mentor.mentorId === parseInt(req.params.id, 10)) });
    } else {
        res.json({ status: 400, message: `Not found mentor with the id of ${req.params.id}` });
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
        res.json({ status: 401, message: 'Please include names and email' });
    } else {
        mentors.push(newMentor);
        res.json({ status: 201, message: 'User created', data: mentors });
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

                res.json({ status: 200, message: 'mentor updated', data: mentor });
            }
        });
    } else {
        res.json({ status: 401, message: `Not found mentor with the id of ${req.params.id}` });
    }
});

// delete a mentor
router.delete('/:id', (req, res) => {
    const found = mentors.some((mentor) => mentor.mentorId === parseInt(req.params.id, 10));

    if (found) {
        res.json({ status: 200, message: 'mentor deleted', data: mentors.filter((mentor) => mentor.mentorId !== parseInt(req.params.id, 10)) });
    } else {
        res.json({ status: 401, message: `Not found mentor with the id of ${req.params.id}` });
    }
});

export default router;
