const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
const { cons_color } = require('./config/console-colors');

require('dotenv').config();

// Crea el servidor express
const app = express();

// Conexion a la base de datos
dbConnection();

// Habilitar CORS
app.use(cors())

// Directorio publico
app.use(express.static('public'));

// Leer y parsear el body
app.use( express.json() );

// Especificamos la ruta donde se van a habilitar las rutas de auth
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// TODO: Rutas crud


app.listen(process.env.PORT, ()=>{
    const {BgBlue, FgWhite, Reset, FgYellow, Blink, BgGreen} = cons_color;
    console.log(FgYellow, "REACT_APP_API_URL: ", BgBlue, process.env.REACT_APP_API_URL, Reset);

    console.log(BgBlue, FgWhite, 
      `Servidor corriendo en el puerto ${ process.env.PORT } at ${ new Date().getTime() }`, 
      Reset);
  });
