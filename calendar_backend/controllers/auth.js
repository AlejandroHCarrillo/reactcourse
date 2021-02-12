/**
 * Este controlador regresa las respuestas a las rutas solicitadas
 */

 const express = require('express');

const createUser =  (req, res = express.response ) => {
    res.json({ 
        ok: true,
        msg: 'register from controller'
    });
};

const LoginUser =  (req, res = express.response ) => {
    res.json({ 
        ok: true,
        msg: 'Login from controller'
    });
};

const renewToken =  (req, res = express.response ) => {
    res.json({ 
        ok: true,
        msg: 'Renew token from controller'
    });
};

module.exports = {
    createUser,
    LoginUser,
    renewToken
};