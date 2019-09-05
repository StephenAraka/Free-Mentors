import Joi from '@hapi/joi';
import users from '../../dummyData/Users';
import admin from '../../dummyData/Admin';
import createToken from '../../helpers/createNewToken';

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
            user.token = createToken(email);
            res.json({
                status: 201,
                message: 'User is successfully logged in',
                data: {
                    user
                }
            });
        } else {
            res.json({
                status: 403,
                message: 'Forbidden'
            });
        }

        if (email === admin.email && password === admin.password) {
            admin.token = createToken(email);
            res.json({
                status: 201,
                message: 'Admin is successfully logged in',
                data: {
                    admin
                }
            });
        } else {
            res.json({
                status: 403,
                message: 'Forbidden'
            });
        }
    }
}
