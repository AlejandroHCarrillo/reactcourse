/**
 * Este controlador regresa las respuestas a las rutas solicitadas para la autentificacion de usuarios
 */
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/UsuarioModel');
const { generateJWT } = require('../helpers/jwt')
const { cons_color } = require('../config/console-colors');

const createUser = async(req, res = response ) => {
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

        // Encriptamos el password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();

        // Generar el token
        const token = await generateJWT(usuario.id, usuario.name);
        
        res.status(201).json({ 
            ok: true,
            // msg: `Usuario ${ usuario.name } ha sido registrado con exito`,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch( error ){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, por favor contacte a su admistrador'
        })
    }
};

const LoginUser = async (req, res = express.response ) => {
    // Obtenemos la informacion del body
    const {email, password } = req.body;    
    const usuario = await Usuario.findOne({ email });
    try{

        // console.log("usuario: ", usuario);
        if( !usuario ){
            return res.status(400).json({
                    ok: false,
                    // msg: 'El usuario no existe.'
                    msg: 'Error de autenticacion(u).'
                });
        }

        // revisar password encriptado
        const isValid = bcrypt.compareSync(password, usuario.password);

        if (!isValid){
            return res.status(400).json({
                ok: false,
                // msg: 'El password es incorrecto.'
                msg: 'Error de autenticacion(p).'
            });    
        }
        // Generar el token
        const token = await generateJWT(usuario.id, usuario.name);

        res.json({ 
            ok: true,
            name: usuario.name,
            uid: usuario.id,
            // msg: 'Login OK'
            token
        });
    } catch( error ){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, por favor contacte a su admistrador'
        })
    }
};

const renewToken = async (req, res = express.response ) => {
    const { uid, name } = req;

    // Generar el token
    const token = await generateJWT(uid, name);

    res.json({ 
        ok: true,
        uid: uid,
        name: name,
        token,
        // uid,
        // msg: 'Renew token from controller'
    });
};

module.exports = {
    createUser,
    LoginUser,
    renewToken
};