// console.log("I'm batman !!!");
const express = require('express');
require('dotenv').config();

// console.log(process.env);

// Crea el servidor express
const app = express();

// Directorio publico
app.use(express.static('public'));

// Leer y parsear el body
app.use( express.json() );

// Especificamos la ruta donde se van a habilitar las rutas de auth
app.use('/api/auth', require('./routes/auth'));

// TODO: Rutas crud


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
    
  });
