import * as jwt from 'jsonwebtoken';
import secretKey from './Key';

export const createToken = (user) => {
    const token = jwt.sign({ user }, secretKey, {
        expiresIn: '1h',
    });
    return token;
};

export default createToken;
