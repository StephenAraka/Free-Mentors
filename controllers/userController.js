// import { Router } from 'express';
import uuid from 'uuid';
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

    // get single user
    static getSingleUser(req, res) {
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
                    const found = users.some((user) => user.userId === parseInt(req.params.id, 10));
                    if (found) {
                        res.json({ status: 200, message: 'User found', data: users.filter((user) => user.userId === parseInt(req.params.id, 10)) });
                    } else {
                        res.json({ status: 400, message: `Not found user with the id of ${req.params.id}` });
                    }
                }
            });
        }
    }

    // Change a user to a mentor
    static changeToMentor(req, res) {
        const found = users.some((user) => user.userId === parseInt(req.params.id, 10));
        if (found) {
            users.forEach((user) => {
                if (user.userId === parseInt(req.params.id, 10)) {
                    const newMentor = {
                        id: uuid.v4(),
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        password: 'secret',
                        address: user.address,
                        bio: user.bio,
                        occupation: user.occupation,
                        expertise: user.expertise,
                        role: 'mentor'
                    };
                    mentors.push(newMentor);
                    const usersUpdate = users.filter((user) => user.userId !== parseInt(req.params.id, 10));
                    res.json({ status: 200, message: 'User account changed to mentor', data: [{ mentors }, { users: usersUpdate }] });
                }
            });
        } else {
            res.json({ status: 401, message: `Not found user with the id of ${req.params.id}` });
        }
    }
}

// // Update a user
// router.put('/:id', (req, res) => {
//     const found = users.some((user) => user.userId === parseInt(req.params.id, 10));

//     if (found) {
//         const updateUser = req.body;
//         users.forEach((user) => {
//             if (user.userId === parseInt(req.params.id, 10)) {
//                 user.firstName = updateUser.firstName ? updateUser.firstName : user.firstName;
//                 user.lastName = updateUser.lastName ? updateUser.lastName : user.lastName;
//                 user.email = updateUser.email ? updateUser.email : user.email;
//                 user.address = updateUser.address ? updateUser.address : user.address;
//                 user.bio = updateUser.bio ? updateUser.bio : user.bio;
//                 user.occupation = updateUser.occupation ? updateUser.occupation : user.occupation;
//                 user.expertise = updateUser.expertise ? updateUser.expertise : user.expertise;

//                 res.json({ status: 200, message: 'user updated', data: user });
//             }
//         });
//     } else {
//         res.json({ status: 401, message: `Not found user with the id of ${req.params.id}` });
//     }
// });

// // delete a user
// router.delete('/:id', (req, res) => {
//     const found = users.some((user) => user.userId === parseInt(req.params.id, 10));

//     if (found) {
//         res.json({ status: 200, message: 'user deleted', data: users.filter((user) => user.userId !== parseInt(req.params.id, 10)) });
//     } else {
//         res.json({ status: 401, message: `Not found user with the id of ${req.params.id}` });
//     }
// });
