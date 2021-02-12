/**
 * Rutas de autorizacion de usuarios
 * host + /api/auth
 */
const { Router } = require('express');
const  router = Router();

// Importamos las funciones del controlador auth
const { createUser, LoginUser, renewToken } = require('../controllers/auth');

// Configuracion de rutas para que ejecuten una funcion del controlador
router.post('/new', createUser );

router.post('/', LoginUser);

router.get('/renew', renewToken);



// Exportamos el router
module.exports = router;