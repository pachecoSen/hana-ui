"use strict";

const app = require('./server'),
    db = require('./server/dbConn');

const { PORT, IP } = require('./config/server'),
    { HOST, PORT:PortDB } = require('./config/db'),
    { Terminal:terminal } = require('terminal-kit');

app.listen(PORT, () => terminal().green(`Servidor escuchando en: ${ IP }:${ PORT }... OK!\nConectado a la base de datos: ${ HOST }:${ PortDB }... OK!\n`));