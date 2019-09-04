import express from 'express';
import chalk from 'chalk';
import Debug from 'debug';
import path from 'path';
// Imported routes
import routes from './routes/index';
import signIn from './controllers/auth/signin';
import signUp from './controllers/auth/signup';
import users from './controllers/userController';
import mentors from './controllers/mentors';
import sessions from './controllers/sessions/session';

const PORT = process.env.PORT || 3000;
const app = express();
const debug = Debug('app');

// Set static folder middleware
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to help with postman
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Client Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/sign-in.html'));
});

app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/sign-up.html'));
});

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/welcome.html'));
});

app.get('/view-all-mentors', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/view-all-mentors.html'));
});

app.get('/view-mentor', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/view-mentor.html'));
});

app.get('/view-all-users', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/view-all-users.html'));
});

app.get('/view-requests', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/view-requests.html'));
});

app.get('/view-request-info', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/view-request-info.html'));
});

const apiRoute = '/api/v1/';

app.use('/', routes);

// Users
app.use(`${apiRoute}users`, users);

// Mentors
app.use(`${apiRoute}mentors`, mentors);

// Authentication
app.use(`${apiRoute}auth/signup`, signUp);
app.use(`${apiRoute}auth/signin`, signIn);

// Sessions
app.use(`${apiRoute}sessions`, sessions);

app.listen(PORT, () => {
    debug(`listening on port ${chalk.blue(PORT)}`);
});

export default app;
