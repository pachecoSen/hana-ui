"use strict";
require('module-alias/register');

const conn = require('@db/dbConn');

module.exports = app => {
    app.post('/new', (req, res) => {
        const { tag_nombre:nombre, tag_lugar:lugar, tag_fecha:fecha, tag_direccion:direccion, tag_tel:tel, tag_puesto:puesto } = req.body;
        const sql = conn.prepare("INSERT INTO NEWEMPLEADOS.EMPLEADO (NOMBRES, LUGAR_NACIMIENTO, FECHA_NACIMIENTO, DIRECCION, TELEFONO, PUESTO) VALUES (?,?,?,?,?,?)");
        const data = sql.exec([nombre, lugar, fecha, direccion, tel, puesto]);

        return res.status(200).json({ data });
    });
};