"use strict";

module.exports = app => {
    const rutas = ['insert', 'update', 'delete', 'select'];
    rutas.forEach(r => {
        require(`./${ r }`)(app);
    });
};