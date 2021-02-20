import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import "../css/style.css"

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Uso del Memo</h1>
            <h2>Counter <Small value={ counter } /> </h2>
            <hr/>   
            <button type="button" className="btn btn-success ml-3"
                onClick= { increment }
            >
                +1
            </button>

            <button type="button" 
            className= { show? "btn btn-outline-warning ml-3" : "btn btn-outline-primary ml-3" }
                onClick={ () => { setShow(!show); } }
            >
                { show? "hide" : "show" } { JSON.stringify( show ) }
            </button>
        </>
    )
}
