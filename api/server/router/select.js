"use strict";
require('module-alias/register');

const conn = require('@db/dbConn');

module.exports = app => {
    app.get('/list', (req, res) => {
        const data = conn.exec("SELECT * FROM NEWEMPLEADOS.EMPLEADO WHERE ACTIVO=1");
        
        return res.status(200).json({ data });
    });
};