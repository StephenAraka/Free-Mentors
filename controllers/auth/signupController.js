import uuid from 'uuid';
import * as jwt from 'jsonwebtoken';
import secretKey from './Key';
import users from '../../dummyData/Users';

export default class SignUpController {
    static signUp(req, res) {
        const {
            firstName,
            lastName,
            email,
            password,
            address,
            bio,
            occupation,
            expertise,

        } = req.body;

        const newUser = {
            id: uuid.v4(),
            firstName,
            lastName,
            email,
            password,
            address,
            bio,
            occupation,
            expertise,
            role: 'user'
        };

        const user = users.find(
            (user) => user.email === email && user.password === password // TODO: hash
        );

        if (user) {
            res.json({
                status: 401,
                message: 'Error, email already exists'
            });
        }

        if (!newUser.firstName || !newUser.lastName || !newUser.email) {
            res.json({ status: 400, message: 'Please include names and email' });
        } else {
            jwt.sign({ newUser }, secretKey, (err, token) => {
                if (err) {
                    res.json({
                        status: 403,
                        message: 'Forbidden'
                    });
                } else {
                    res.status(201).json({
                        message: 'User created successfully',
                        data: {
                            token,
                            user: newUser
                        }
                    });
                }
            });
            users.push(newUser);
        }
    }
}
