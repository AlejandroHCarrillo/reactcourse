// console.log("I'm batman !!!");
const express = require('express');
// Crea el servidor express
const app = express();

// Configuracion de rutas
app.get('/', (req, res) => {
    console.log("Requiere poner /");
    res.json({ ok: true});
});

app.listen(4000, ()=>{
    console.log(`Servidor corriendo en el puerto ${ 4000 }`);
    
  });
