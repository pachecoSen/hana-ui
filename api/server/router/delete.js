"use strict";
require('module-alias/register');

const conn = require('@db/dbConn');

module.exports = app => {
    app.get('/lock/:id', (req, res) => {
        const { id } = req.params;
        const sql = conn.prepare("UPDATE NEWEMPLEADOS.EMPLEADO SET ACTIVO = 0 WHERE ID = ?");
        const data = sql.exec([id]);

        return res.status(200).json({ data });
    });
};