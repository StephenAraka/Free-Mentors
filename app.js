const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('Browski');
});

app.listen(PORT, () => {
    debug(`listening on port ${chalk.blue(PORT)}`);
});
