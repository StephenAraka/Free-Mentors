import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import secretKey from './Key';
import users from '../../../../src/Users';
import admin from '../../../../src/Admin';

const router = Router();
// login a user
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const user = users.find(
            (user) => user.email === email && user.password === password // TODO: hash
        );

        if (user) {
            jwt.sign({ user }, secretKey, (err, token) => {
                if (err) {
                    res.json({
                        status: 403,
                        message: 'Forbidden'
                    });
                } else {
                    res.json({
                        status: 201,
                        message: 'User is successfully logged in',
                        data: {
                            token
                        }
                    });
                }
            });
        }
    }

    if (email === admin.email && password === admin.password) {
        jwt.sign({ admin }, secretKey, (err, token) => {
            if (err) {
                res.json({
                    status: 403,
                    message: 'Forbidden'
                });
            } else {
                res.json({
                    status: 201,
                    message: 'Admin is successfully logged in',
                    data: {
                        token
                    }
                });
            }
        });
    }
});

export default router;
