const mongoose = require('mongoose');
require('dotenv').config();

const { cons_color } = require('../config/console-colors');

const { FgRed, Reset, BgBlue, Reverse } = cons_color; 
// console.log(BgYellow, "La cadena de conexion es: ", process.env.DB_CNN);
// console.log(BgYellow, "El puerto es: ", process.env.PORT);
// console.log(Reset);

const dbConnection = async() => {
    try{
        await mongoose.connect( process.env.DB_CNN, 
                         {
                            useNewUrlParser: true, 
                            useUnifiedTopology: true,
                            useCreateIndex:true
                        });
        console.log(Reverse, BgBlue, "Database on line", Reset);
    }
    catch(error){
        // console.log("Hubo un error: ", error);
        console.log( FgRed, 
            "Hubo un error: ", error, 
            Reset);

        throw new Error('Error a inicializar la base de datos');
    }

}

module.exports = {
    dbConnection
}