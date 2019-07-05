"use strict";

const express = require('express'),
    morgan = require('morgan'),
    { json:BP_Json } = require('body-parser'),
    helmet = require('helmet'),
    cors = require('cors');

const app = express();

//Desabilityar x-powered-by
app.disable('x-powered-by');

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});

app.use(helmet(), BP_Json(), morgan('short'));

require('./router')(app);

module.exports = app;