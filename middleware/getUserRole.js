import users from '../dummyData/Users';
import admin from '../dummyData/Admin';
import mentors from '../dummyData/Mentors';

// import mentors from '../dummyData/Mentors';

const checkforUser = (req, res, next) => {
    let userExist = '';
    userExist = users.find(
        (user) => user.email === req.token.email && user.role === 'user' // TODO: hash
    );

    if (userExist) {
        req.user = userExist;
        next();
    } else {
        res.status(403).json({
            status: 403,
            message: 'Invalid user request'
        });
    }
};

const checkforMentor = (req, res, next) => {
    let mentorExist = '';
    mentorExist = mentors.find(
        (mentor) => mentor.email === req.token.email && mentor.role === 'mentor' // TODO: hash
    );

    if (mentorExist) {
        req.user = mentorExist;
        next();
    } else {
        res.status(403).json({
            status: 403,
            message: 'Invalid user request'
        });
    }
};

const checkforAdmin = (req, res, next) => {
    let adminExist = '';
    adminExist = admin.find(
        (admin) => admin.email === req.token.email && admin.role === 'admin' // TODO: hash
    );

    if (adminExist) {
        req.user = adminExist;
        next();
    } else {
        res.status(403).json({
            status: 403,
            message: 'Invalid user request'
        });
    }
};

export { checkforUser, checkforAdmin, checkforMentor };
