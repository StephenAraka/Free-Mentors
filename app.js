import express from 'express';
import chalk from 'chalk';
import Debug from 'debug';
import path from 'path';
// Imported routes
import signIn from './routes/api/v1/auth/signin';
import signUp from './routes/api/v1/auth/signup';
import users from './routes/api/v1/users';
import mentors from './routes/api/v1/mentors';
import sessions from './routes/api/v1/sessions/session';

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

// Users
app.use('/api/v1/users', users);

// Mentors
app.use('/api/v1/mentors', mentors);

// Authentication
app.use('/api/v1/auth/signup', signUp);
app.use('/api/v1/auth/signin', signIn);

// Sessions
app.use('/api/v1/sessions', sessions);

app.listen(PORT, () => {
    debug(`listening on port ${chalk.blue(PORT)}`);
});
