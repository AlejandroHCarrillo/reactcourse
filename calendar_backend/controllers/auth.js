/**
 * Este controlador regresa las respuestas a las rutas solicitadas para la autentificacion de usuarios
 */
const express = require('express');
// const { validationResult } = require('express-validator');


const createUser =  (req, res = express.response ) => {
    // console.log(req.body);

    // Obtenemos la informacion del body
    const { name, email, password } = req.body;

    // Las validaciones se movieron al middleware validar-campos
    // Validacion Manual
    // if (name.length < 5){
    //     return res.status(400).json({ 
    //         ok: false,
    //         msg: 'El nombre debe ser al menos de 5 letras',
    //     });   
    // }

    res.status(201).json({ 
        ok: true,
        msg: 'register user from controller',
        name,
        email,
        password
    });
};

const LoginUser =  (req, res = express.response ) => {
    // Obtenemos la informacion del body
    const { name, email, password } = req.body;

    // Las validaciones se movieron al middleware validar-campos
    // Validacion automatica
    // // Revisamos las validaciones 
    // const errors = validationResult(req);
    // console.log("errors: ", errors);
    // // Si hay errores regresamos una respuesta con los errores
    // if ( !errors.isEmpty() ){
    //     return res.status(400).json({ 
    //             ok: false,
    //             errors: errors.mapped(),
    //         });       
    // }

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