// import { Router } from 'express';
// import uuid from 'uuid';

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

    static getSpecificMentor(req, res) {
        let specificMentor;
        mentors.map((element) => {
            if (element.mentorId === parseInt(req.params.id, 10)) {
                specificMentor = element;
            }
        });
        if (!specificMentor) {
            return res.json({ status: 400, message: `Not found mentor with the id of ${req.params.id}` });
        }

        const {
            id,
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
                id,
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
}

export default UsersController;
