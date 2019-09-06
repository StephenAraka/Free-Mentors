// import { Router } from 'express';
import uuid from 'uuid';
import users from '../dummyData/Users';
import mentors from '../dummyData/Mentors';

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
            res.json({ status: 404, message: `Not found user with the id of ${req.params.id}` });
        }
    }
}

export default UsersController;
