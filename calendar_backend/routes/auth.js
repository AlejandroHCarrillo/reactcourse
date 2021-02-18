 /**
 * Rutas de autorizacion de usuarios
 * host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
// Importamos las funciones del controlador auth
const { createUser, LoginUser, renewToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

// Configuracion de rutas para que ejecuten una funcion del controlador
// Las validaciones se hacen con el check 
// se pueden mandar tantas como sean necesarias, una por cada campo a validar 
// Se creo el middleware validarCampos el cual verifica que se cumplan las condiciones de los checks
// si no cumplen con las condiciones de los checks regresa una respuesta 400 con los errores 
router.post('/new',
            check('name', 'El nombre es obligatorio').not().isEmpty(),
            check('email', 'El email no es valido').isEmail(),
            check('password', 'El password debe ser de al menos 5+ caracteres de largo y contener al menos un numero')
                .not()
                .isIn(['123', 'password', 'god'])
                .withMessage('No debe usar paswords comunes')
                .isLength({ min: 5 })
                .matches(/\d/)
            , validarCampos,
            createUser );

router.post('/',
            check('email', 'El email no es valido').isEmail(),
            check('password', 'El password no es valido')
                .not().isEmpty()
                .isLength({ min: 5 })
            , validarCampos,
            LoginUser );

router.get('/renew', validarJWT, renewToken);

// Exportamos el router
module.exports = router;