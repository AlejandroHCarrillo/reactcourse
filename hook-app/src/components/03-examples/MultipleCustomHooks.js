import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../css/style.css'

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch('https://www.breakingbadapi.com/api/quotes/'+counter);

    console.log(loading);
    // la expresion !!data && data[0] es una validacion
    // !!data significa que si hay datos
    // null no es un valor manejable pero si negamos null entonces 
    // !null = true, un valor nulo negado es iguala true entonces
    // ya que !null es true entonces !true = false por lo tanto
    // !!null = false, de esta manera conevertimos un nulo en falso
    // usando && podemos pasar a la siguiente parte de la expresion
    // la cual regresa la informacion de data[0] cuando data sea != null
    const {author, quote} = !!data && data[0];

    console.log(author, quote);
    return (
        <>
            <h1>Frases celebres de Breaking Bad</h1>
            <h3>usando multiple custom hooks!!!</h3>            
            <hr/>

            {
                loading?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-end">
                        <p className="mb-10">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )

            }

            {/* <button onClick={ () => { increment(1) } } className="btn btn-primary">></button>    */}
            <button onClick={ () => { increment(1) } } className="btn btn-primary">Siguiente</button>   


        </>
    )
}
