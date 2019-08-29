const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/sign-in.html'));
});

app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/sign-up.html'));
});

app.listen(PORT, () => {
    debug(`listening on port ${chalk.blue(PORT)}`);
});
