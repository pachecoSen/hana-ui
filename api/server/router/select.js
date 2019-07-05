"use strict";
require('module-alias/register');

const conn = require('@db/dbConn');

module.exports = app => {
    app.get('/list', (req, res) => {
        const data = conn.exec("select * from NEWEMPLEADOS.EMPLEADO");
        
        return res.status(200).json({ data });
    });
};