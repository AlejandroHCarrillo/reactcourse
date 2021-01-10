import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout-effect.css'

export const LayoutEffectExample = () => {
    const {counter, increment} = useCounter(1);
    const { data } = useFetch('https://www.breakingbadapi.com/api/quotes/'+counter);
    
    const [boxSize, setBoxSize] = useState({});
    
    // console.log(loading);
    // la expresion !!data && data[0] es una validacion
    // !!data significa que si hay datos
    // null no es un valor manejable pero si negamos null entonces 
    // !null = true, un valor nulo negado es iguala true entonces
    // ya que !null es true entonces !true = false por lo tanto
    // !!null = false, de esta manera conevertimos un nulo en falso
    // usando && podemos pasar a la siguiente parte de la expresion
    // la cual regresa la informacion de data[0] cuando data sea != null
    const {quote} = !!data && data[0]; 
    const refTagP = useRef();

    // useLauyoutEffect permite conocer las caracteristicas de un 
    // elemento del DOM asincronamente, pero DESPUES se haya vuelto a renderizar 
    useLayoutEffect(() => {
        console.log( refTagP.current.getBoundingClientRect() );
        setBoxSize(refTagP.current.getBoundingClientRect());
    }, [quote]);
    
    // console.log( quote );
    return (
        <>
            <h1>Frases celebres de Breaking Bad</h1>
            <h3>usando multiple Layout effect!!!</h3>            
            <hr/>

            <blockquote className="blockquote text-end">
                <p className="mb-10"
                    ref={refTagP}
                >{quote}</p>
            </blockquote>

            {/* <button onClick={ () => { increment(1) } } className="btn btn-primary">></button>    */}
            <button onClick={ () => { increment(1) } } className="btn btn-primary">Siguiente</button>   

            <pre>
                { JSON.stringify(boxSize, null, 2)}
            </pre>
        </>
    )
}
