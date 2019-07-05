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
            const col = ['NOMBRES', 'LUGAR DE NACIMIENTO', 'FECHA DE NACIMIENTO', 'DIRECCION', 'TELEFONO', 'PUESTO', 'TAREAS'];
            const form = [
                {'ref' : 'Nombre', 'tag' : 'nombre', 'idForm' : 'formNew'},
                {'ref' : 'Lugar de nacimiento', 'tag' : 'lugar', 'idForm' : 'formNew'},
                {'ref' : 'Fecha de nacimiento', 'tag' : 'fecha', 'idForm' : 'formNew'},
                {'ref' : 'Direccion', 'tag' : 'direccion', 'idForm' : 'formNew'},
                {'ref' : 'Telefono', 'tag' : 'tel', 'idForm' : 'formNew'},
                {'ref' : 'Puesto', 'tag' : 'puesto', 'idForm' : 'formNew'}
            ];

            const formDos = [
                {'ref' : 'Nombre', 'tag' : 'nombre', 'idForm' : 'formChanger'},
                {'ref' : 'Lugar de nacimiento', 'tag' : 'lugar', 'idForm' : 'formChanger'},
                {'ref' : 'Fecha de nacimiento', 'tag' : 'fecha', 'idForm' : 'formChanger'},
                {'ref' : 'Direccion', 'tag' : 'direccion', 'idForm' : 'formChanger'},
                {'ref' : 'Telefono', 'tag' : 'tel', 'idForm' : 'formChanger'},
                {'ref' : 'Puesto', 'tag' : 'puesto', 'idForm' : 'formChanger'}
            ];

            const action = `${ host }/new`;
            const eraseUrl = `${ host }/lock`;
            const changerUrl = `${ host }/changer`;

            return res.render('home', {'title' : 'Home', col, data, form, action, eraseUrl, changerUrl, formDos });
        });
    });
};