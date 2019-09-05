import Joi from '@hapi/joi';
import admin from '../../dummyData/Admin';
import createToken from '../../helpers/createNewToken';

const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

export default class AdminSignInController {
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

        const myAdmin = admin.find(
            (admin) => admin.email === email && admin.password === password // TODO: hash
        );

        if (myAdmin) {
            myAdmin.token = createToken(email);
            res.json({
                status: 201,
                message: 'Admin is successfully logged in',
                data: {
                    admin: myAdmin
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
