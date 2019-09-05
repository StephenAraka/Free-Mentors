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
}

export default UsersController;
