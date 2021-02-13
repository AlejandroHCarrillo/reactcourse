/**
 * Este controlador regresa las respuestas a las rutas solicitadas para la autentificacion de usuarios
 */
const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/UsuarioModel')

const createUser = async(req, res = express.response ) => {
    // console.log(req.body);

    // Obtenemos la informacion del body
    const { email, password } = req.body;

    try{
        let usuario = await Usuario.findOne({ email });

        // console.log("usuario: ", usuario);
        if( usuario ){
            return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con el correo: ' + email
                });
        }

        usuario = new Usuario(req.body);

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();                
        
        res.status(201).json({ 
            ok: true,
            msg: `Usuario ${ usuario.name } ha sido registrado con exito`,
            uid: usuario.id,
            name: usuario.name
        });

    } catch( error ){
        // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, por favor contacte a su admistrador',
            error: error
        })
    }
};

const LoginUser =  (req, res = express.response ) => {
    // Obtenemos la informacion del body
    const { name, email, password } = req.body;

    try{
        res.json({ 
            ok: true,
            msg: 'Login from controller'
        });
    } catch( error ){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, por favor contacte a su admistrador'
        })
    }
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