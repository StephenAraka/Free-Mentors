import * as jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import secretKey from './Key';
import users from '../../dummyData/Users';
import admin from '../../dummyData/Admin';

const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

export default class SignInController {
    // login a user
    static signIn(req, res) {
        const { email, password } = req.body;

        Joi.validate({ email, password }, schema, (err) => {
            if (err) {
                res.status(403).json({
                    status: 403,
                    message: 'Error please enter valid email and password'
                });
            }
        });

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
                    res.status(201).json({
                        status: 201,
                        message: 'User is successfully logged in',
                        data: {
                            token
                        }
                    });
                }
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Email address not found'
            });
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
    }
}
