// import { Router } from 'express';
import uuid from 'uuid';
import users from '../dummyData/Users';
import mentors from '../dummyData/Mentors';
import sessions from '../dummyData/Sessions';

class UsersController {
    // get all users - ONLY ADMIN
    static getAllUsers(req, res) {
        res.status(200).json({
            status: 200,
            data: { users, mentors }
        });
    }

    static getAllMentors(req, res) {
        res.status(200).json({
            data: mentors
        });
    }

    static changeToMentor(req, res) {
        const found = users.some((user) => user.userId === parseInt(req.params.id, 10));

        if (found) {
            users.forEach((user) => {
                if (user.userId === parseInt(req.params.id, 10)) {
                    const newMentor = {
                        id: uuid.v4(),
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        password: 'secret',
                        address: user.address,
                        bio: user.bio,
                        occupation: user.occupation,
                        expertise: user.expertise,
                        role: 'mentor'
                    };
                    mentors.push(newMentor);
                    users.filter((user) => user.userId !== parseInt(req.params.id, 10));
                    res.status(200).json({
                        status: 200,
                        message: 'User account changed to mentor'
                    });
                }
            });
        } else {
            res.status(404).json({
                status: 404,
                message: `Not found user with the id of ${req.params.id}`
            });
        }
    }

    static getSpecificMentor(req, res) {
        let specificMentor;
        // eslint-disable-next-line array-callback-return
        mentors.map((element) => {
            if (element.mentorId === parseInt(req.params.id, 10)) {
                specificMentor = element;
            }
        });
        if (!specificMentor) {
            return res.json({ status: 400, message: `Not found mentor with the id of ${req.params.id}` });
        }

        const {
            mentorId,
            firstName,
            lastName,
            email,
            address,
            bio,
            occupation,
            expertise,
            role
        } = specificMentor;

        return res.status(200).json({
            status: 200,
            data: {
                mentorId,
                firstName,
                lastName,
                email,
                address,
                bio,
                occupation,
                expertise,
                role
            }
        });
    }

    static createSession(req, res) {
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
            res.status(201).json({ status: 201, data: newSession });
        }
    }

    static acceptRequest(req, res) {
        const found = sessions.some((session) => session.sessionId === parseInt(req.params.id, 10));
        if (found) {
            sessions.forEach((session) => {
                if (session.sessionId === parseInt(req.params.id, 10)) {
                    session.status = 'accepted';
                }
                res.status(200).json({
                    status: 200,
                    data: session
                });
            });
        } else {
            res.satus(400).json({
                status: 404,
                message: `Not found session with the id of ${req.params.id}`
            });
        }
    }

    static rejectRequest(req, res) {
        const found = sessions.some((session) => session.sessionId === parseInt(req.params.id, 10));
        if (found) {
            sessions.forEach((session) => {
                if (session.sessionId === parseInt(req.params.id, 10)) {
                    session.status = 'rejected';
                }
                res.status(200).json({
                    status: 200,
                    data: session
                });
            });
        } else {
            res.satus(400).json({
                status: 404,
                message: `Not found session with the id of ${req.params.id}`
            });
        }
    }
}

export default UsersController;
