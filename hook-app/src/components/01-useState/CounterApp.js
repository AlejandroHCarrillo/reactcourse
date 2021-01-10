import React, { useState }  from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2, counter4} = state;

    // console.log(counter);

    return (
        <>
            <h1>Contador1 {counter1}</h1>
            <h1>Contador2 {counter2}</h1>
            <h1>Contador4 {counter4}</h1>
            <hr/>

            <button className="btn btn-primary"
                onClick={ () =>{
                    // setCounter(counter +1 );
                    setState({ 
                        ...state, 
                        counter1: counter1 +1 
                    } );
                }}
            >+</button>
        </>
    )
}
