import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

    // const [counter] = useState(0);
    const [counter, setCounter] = useState(value);

    // handleAdd con 2 ejemplos d ecomo usar el set counter
    const handleAdd = () => {        
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );
    }
    
    // handleReset con ejemplo de funcion en 1 linea
    const handleReset = () => setCounter( value );

    const handleSubs = () => {        
        console.log(counter);
        if (counter <= 0) {
            setCounter(0);
            return;
        }
        setCounter( counter - 1 );
    }

    return <>
            <h1>Contador</h1>
            <p>{ counter }</p>
            {/* <button onClick= { (e)=> { handleAdd(e); } } >+1</button>   */}
            <button onClick= { handleAdd } >+</button>  
            <button onClick= { handleReset } >Reset</button>  
            <button onClick= { () => setCounter(0) } >Zero</button>  
            <button onClick= { handleSubs } >-</button>  
           </>;
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0 
}

export default CounterApp;