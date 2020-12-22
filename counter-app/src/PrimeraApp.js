import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    // const saludo = {
    //      nombre: "Alejandro",
    //      edad: 43
    // };
    // const saludo = "Hola K"
    // console.log(props);
    return <>
            <h1>{ saludo }</h1>
            {/* <pre>
                { JSON.stringify(saludo, null, 3)}
            </pre> */}
            <p>{ subtitulo }</p>
           </>;
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Insert subtitulo here!!!" 
}

export default PrimeraApp;

