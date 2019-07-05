"use strict";
require('module-alias/register');

require('@config/hbs');

const express = require('express'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    cors = require('cors'),
    { resolve } = require('path');

const app = express();

app.use(express.static(resolve('./server/views/public/')));

app.set('view engine', 'hbs');
app.set('views', resolve('./server/views'));

app.disable('x-powered-by');

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});

app.use(helmet(), morgan('short'));

require('./router')(app);

module.exports = app;