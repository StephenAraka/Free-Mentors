const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

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

// Users API route
app.use('/api/v1/users', require('./routes/api/v1/users'));

// Mentors API route
app.use('/api/v1/mentors', require('./routes/api/v1/mentors'));

app.listen(PORT, () => {
    debug(`listening on port ${chalk.blue(PORT)}`);
});
