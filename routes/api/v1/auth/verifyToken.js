// TOKEN FORMAT = Authorization: Bearer <access_token>

// STEPS
// 1. Get auth header value
// 2. Check if bearer is undefined
// 3. If undefined, forbid
// 4. Else... Split token format
// 5. Get token, Set token

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.json({
            status: 403,
            message: 'Forbidden'
        });
    }
};

export default verifyToken;
