import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import "../css/style.css"

export const MemoHook = () => {

    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoProPes = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
            <h1>Uso del MemoHook</h1>
            <h2>Counter <small>{ counter }</small></h2>
            <hr/>   

            <p>{ memoProPes }</p>

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
