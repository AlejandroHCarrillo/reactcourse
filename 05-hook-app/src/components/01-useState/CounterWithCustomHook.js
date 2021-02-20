import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {
    
    const {state, increment, decrement, reset } = useCounter(5)

    return (
        <>
            <h1>Contador con Hook: { state } </h1>
            <hr/>
            <button onClick={ () => { increment(2) } } className="btn btn-success">+</button>   
            <button onClick= { reset } className="btn btn-secondary">reset</button>   
            <button onClick={ () => { decrement(1) } } className="btn btn-danger">-</button>   
        </>
    )
}
