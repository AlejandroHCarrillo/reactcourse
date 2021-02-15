 /**
 * Rutas de eventos
 * host + /api/events
 */
const { Router } = require("express");
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

// Todas las rutas deben ser validadas por el token
// Para usar el middleware validarJWT en todas las rutas
router.use( validarJWT );

// Obtener eventos, si esta ruta no necesitara token 
// hay que mocerla arriba de router.use( validarJWT );  
router.get('/', getEvents);

// Crear nuevo evento
router.post('/', 
            check('title', 'El titulo es obligatorio').not().isEmpty(),
            check('start', 'La fecha de inicio no es valida o no fue proporcionada').custom( isDate ),
            check('end', 'La fecha final no es valida o no fue proporcionada').custom( isDate ),
            validarCampos,
            createEvent);

// Actualizar el nuevo evento
router.put('/:id', 
            check('title', 'El titulo es obligatorio').not().isEmpty(),
            check('start', 'La fecha de inicio no es valida o no fue proporcionada').custom( isDate ),
            check('end', 'La fecha final no es valida o no fue proporcionada').custom( isDate ),
            validarCampos,
            updateEvent);

// Eliminar evento
router.delete('/:id', deleteEvent);

module.exports = router;
