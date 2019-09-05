// TOKEN FORMAT = Authorization: Bearer <access_token>

// STEPS
// 1. Get auth header value
// 2. Check if bearer is undefined
// 3. If undefined, forbid
// 4. Else... Split token format
// 5. Get token, Set token

import jwt from 'jsonwebtoken';
import Key from '../controllers/auth/Key';

const verifyToken = (req, res, next) => {
    if (typeof req.headers.authorization === 'undefined') {
        return res.status(403).send({
            status: 403,
            message: 'Error! Unauthorized access!'
        });
    }
    const bearerHeader = req.headers.authorization;
    const bearer = bearerHeader.split(' ');
    let bearerToken = bearer[1];
    
    if (!bearerToken) {
        return res.status(403).send({
            status: 403,
            message: 'Error! Invalid token!'
        });
    }
    try {
        bearerToken = jwt.verify(bearerToken, Key);
    req.token = bearerToken;
        return next();
    } catch (err) {
        return res.status(403).send({
            status: 403,
            message: 'Error! Invalid token!'
        });
    }
};

export default verifyToken;
