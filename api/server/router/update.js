"use strict";
require('module-alias/register');

const conn = require('@db/dbConn');

module.exports = app => {
    app.post('/changer/:id', (req, res) => {
        const { id } = req.params;
        const { tag_direccion, tag_fecha, tag_lugar, tag_nombre, tag_puesto, tag_tel  } = req.body;
        const sql = conn.prepare("UPDATE NEWEMPLEADOS.EMPLEADO SET NOMBRES = ?, LUGAR_NACIMIENTO = ?, FECHA_NACIMIENTO = ?, DIRECCION = ?, TELEFONO = ?, PUESTO = ? WHERE ID = ?");
        const data = sql.exec([tag_nombre, tag_lugar, tag_fecha, tag_direccion, tag_tel, tag_puesto, id]);

        return res.status(200).json({ data });
    });
};