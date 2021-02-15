const moment = require('moment');

const isDate = ( value ) => {
    try {

        if ( !value ){
            return false;
        }
        
        const fecha = moment( value );
        
        if (fecha.isValid()){
            return true;
        }
        return false;
    } catch(error){        
        return false;
    }
}

module.exports =  { isDate };