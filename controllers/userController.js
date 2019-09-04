// import { Router } from 'express';
// import uuid from 'uuid';
import * as jwt from 'jsonwebtoken';
import users from '../dummyData/Users';
import mentors from '../dummyData/Mentors';
import secretKey from './auth/Key';
// import verifyToken from './auth/verifyToken';
import admin from '../dummyData/Admin';

export default class UsersController {
    // get all users - ONLY ADMIN
    static getAllUsers(req, res) {
        const { email, password } = req.body;

        if (email !== admin.email && password !== admin.password) {
            res.json({
                status: 403,
                message: 'Forbidden'
            });
        } else {
            jwt.verify(req.token, secretKey, (err) => {
                if (err) {
                    res.json({
                        status: 403,
                        message: 'Forbidden'
                    });
                } else {
                    res.json({
                        status: 200,
                        data: { users, mentors }
                    });
                }
            });
        }
    }
}
