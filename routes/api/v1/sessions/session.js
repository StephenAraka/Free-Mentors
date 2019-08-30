const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const sessions = require('../../../../src/Sessions');

// get all sessions
router.get('/', (req, res) => {
    res.json(sessions);
});

// create a Session
router.post('/', (req, res) => {
    const newSession = {
        sessionId: uuid.v4(),
        mentorId: req.body.mentorId,
        menteeId: req.body.menteeId,
        questions: req.body.questions,
        menteeEmail: req.body.menteeEmail,
        status: 'pending'
    };

    if (!newSession.menteeId || !newSession.menteeId || !newSession.questions) {
        res.json({ status: 400, message: 'Please include mentor and mentee ID and email' });
    } else {
        sessions.push(newSession);
        res.json({ status: 200, data: newSession });
    }
});

// Accept a session request
router.patch('/:id/accept', (req, res) => {
    const found = sessions.some((session) => session.sessionId === parseInt(req.params.id, 10));
    if (found) {
        sessions.forEach((session) => {
            if (session.sessionId === parseInt(req.params.id, 10)) {
                session.status = 'accepted';
            }
            res.json({ status: 200, data: session });
        });
    } else {
        res.json({ status: 404, message: `Not found session with the id of ${req.params.id}` });
    }
});

module.exports = router;
