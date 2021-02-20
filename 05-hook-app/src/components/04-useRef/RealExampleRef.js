import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../css/style.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Ejemplo real de useRef  </h1>
            <hr/>
            <button className= { !show ? "btn btn-primary" : "btn btn-danger"}
                onClick ={ () => {
                    setShow(!show);
                }}
            > { !show && "mostrar"} { show && "esconder"}</button>

        { show && <MultipleCustomHooks /> }

        </div>
    )
}
