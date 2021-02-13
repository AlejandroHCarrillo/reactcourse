// console.log("I'm batman !!!");
const express = require('express');
const { dbConnection } = require('./database/config');
const { cons_color } = require('./config/console-colors');

require('dotenv').config();

// console.log(process.env);

// Crea el servidor express
const app = express();

// Conexion a la base de datos
dbConnection();

// Directorio publico
app.use(express.static('public'));

// Leer y parsear el body
app.use( express.json() );

// Especificamos la ruta donde se van a habilitar las rutas de auth
app.use('/api/auth', require('./routes/auth'));

// TODO: Rutas crud


app.listen(process.env.PORT, ()=>{
    const {BgBlue, FgWhite, Reset} = cons_color;

    console.log(BgBlue, FgWhite, 
      `Servidor corriendo en el puerto ${ process.env.PORT }`, 
      Reset);
  });
