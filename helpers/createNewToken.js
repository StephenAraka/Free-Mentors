import * as jwt from 'jsonwebtoken';
import secretKey from '../controllers/auth/Key';

const createToken = (email) => {
    const token = jwt.sign({ email }, secretKey, {
        expiresIn: '1h',
    });
    return token;
};

export default createToken;
