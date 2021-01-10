import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import "../css/style.css"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( (num) => {
            setCounter( c => c + num );
        }, [setCounter]);

    return (
        <>
            <h1>Ejemplo del uso de useCallback hook</h1>
            <h3>Counter: { counter }</h3>            
            <hr/>

            <ShowIncrement increment={ increment } />

        </>
    )
}
