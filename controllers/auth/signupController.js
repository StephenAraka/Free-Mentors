import uuid from 'uuid';
import users from '../../dummyData/Users';
import createToken from '../../helpers/createNewToken';


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
            } = newUser;

            newUser.token = createToken(email);
            res.status(201).json({
                status: 201,
                token: newUser.token,
                message: 'User created successfully',
                data: {
                    user: {
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
                }
            });
            users.push(newUser);
        }
    }
}
