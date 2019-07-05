"use strict";

const { Terminal:terminal } = require('terminal-kit');

const { PUERTO } = require('./config/server');

const app = require('./server');

app.listen(PUERTO, () => terminal().green(`Servidor escuchando en el puerto: ${ PUERTO }!\n`));