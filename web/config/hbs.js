"use strict";

const { Terminal:terminal } = require('terminal-kit'),
    { resolve } = require('path'),
    hbs = require('hbs');

const segmento = resolve('./server/views/segmento');

hbs.registerPartials(segmento, () => {
    terminal().green(`\nPlantillas cargadas...\n`);
});