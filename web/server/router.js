"use strict";

const { getJSON } = require('curl'),
    { address } = require('ip');

const host = `http://${ address() }:80`;

module.exports = app => {
    app.get(['/','/home'], (req, res) => {
        getJSON(`${ host }/list`, (err, response, datas) => {
            if(err)
                return res.json({ 'estatus' : false, err });

            const { data } = datas;
            const col = ['CODIGO', 'NOMBRES', 'LUGAR DE NACIMIENTO', 'FECHA DE NACIMIENTO', 'DIRECCION', 'TELEFONO', 'PUESTO', 'ESTADO'];
            const form = [
                {'ref' : 'Codigo', 'tag' : 'codigo'},
                {'ref' : 'Nombre', 'tag' : 'nombre'},
                {'ref' : 'Lugar de nacimiento', 'tag' : 'lugar'},
                {'ref' : 'Fecha de nacimiento', 'tag' : 'fecha'},
                {'ref' : 'Direccion', 'tag' : 'direccion'},
                {'ref' : 'Telefono', 'tag' : 'tel'},
                {'ref' : 'Puesto', 'tag' : 'puesto'},
                {'ref' : 'Estado', 'tag' : 'est'}
            ];

            const action = `${ host }/new`;

            return res.render('home', {'title' : 'Home', col, data, form, action });
        });
    });
};