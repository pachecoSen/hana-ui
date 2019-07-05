"use strict";
require('module-alias/register');

const conn = require('@db/dbConn');

module.exports = app => {
    app.post('/new', (req, res) => {
        const { tag_codigo:codigo, tag_nombre:nombre, tag_lugar:lugar, tag_fecha:fecha, tag_direccion:direccion, tag_tel:tel, tag_puesto:puesto, tag_est:est } = req.body;
        //const sql = conn.prepare("INSERT INTO NEWEMPLEADOS.EMPLEADO (CODIGO, NOMBRES, LUGAR_NACIMIENTO, FECHA_NACIMIENTO, DIRECCION, TELEFONO, PUESTO, ESTADO) VALUES (?,?,?,?,?,?,?,?)");
        const data = conn.exec("INSERT INTO NEWEMPLEADOS.EMPLEADO (CODIGO, NOMBRES, LUGAR_NACIMIENTO, FECHA_NACIMIENTO, DIRECCION, TELEFONO, PUESTO, ESTADO) VALUES (?,?,?,?,?,?,?,?)", [codigo, nombre, lugar, fecha, direccion, tel, puesto, est]);

        return res.status(200).json({ data });
    });
};