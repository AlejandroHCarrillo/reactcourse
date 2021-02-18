/**
 * Este es un middleware personalizado
 * cuando hay errores regresa un reques de error 400 con los errores
 * si no hay errores permite continuar con el procesamiento
 */
const { response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = (req, res = response, next) => {
    // Revisamos las validaciones y regresamos una respuesta con los errores
    const errors = validationResult(req);
//    console.log("errors: ", errors);
    const errorMessages = errors.array().map(x=>x.msg);
    // console.log("msgErrors: ", errorMessages);
    // Si hay errores regresamos una respuesta con los errores
    if ( !errors.isEmpty() ){
        return res.status(400).json({ 
                ok: false,
                errors: errors.mapped(),
                msg: JSON.stringify( errorMessages )
            });       
    }

    next();
}

module.exports = {
    validarCampos
}