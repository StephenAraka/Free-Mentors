import Joi from '@hapi/joi';
import users from '../../dummyData/Users';
import mentors from '../../dummyData/Mentors';
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

        const mentor = mentors.find(
            (mentor) => mentor.email === email && mentor.password === password // TODO: hash
        );

        if (user) {
            user.token = createToken(email);
            res.status(200).json({
                status: 200,
                message: 'User is successfully logged in',
                data: {
                    token: user.token
                }
            });
        } else if (mentor) {
            mentor.token = createToken(email);
            res.status(200).json({
                status: 200,
                message: 'User is successfully logged in',
                data: {
                    token: mentor.token
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
