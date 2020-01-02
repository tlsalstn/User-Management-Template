'use strict'

const colors = require('colors');
const express = require('express');
const db = require('./models/index');
const cors = require('cors');
const api = require('./api');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.sequelize.sync();

app.use('/', api);

const listener = app.listen(3001, () => {
    console.log(colors.white("Server Listening on " + listener.address().port));
});