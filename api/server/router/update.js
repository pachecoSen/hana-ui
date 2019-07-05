"use strict";

module.exports = app => {
    app.post('/changer', (req, res) => {
        res.send('Actualizar');
    });
};