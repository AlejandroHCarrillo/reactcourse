import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import '../css/style.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    // desestructuramos los valores
    const {name, email} = formState;

    // useEffect(() => {
    //     console.log('use effect sin segundo parametro se ejecuta con cualquier cambio');
    // });

    // Disparamos este efecto "evento" cada que hay un cambio
    // Usamos un arreglo vacion en el segundo argumento
    // para dispararlo solo cuando se carga la pagina la primera vez
    useEffect(() => {
        console.log('hi, voy llegando');
    }, []);

    // Escuchamos los cambios del formState
    // en el arreglo del segundo argumento mandamos el evento
    // con el que queremos disparar el evento. 
    useEffect(() => {
        // console.log('algo cambio en el formState');
    }, [formState]);

    // Para "escuchar" los cambios del email
    // en el arreglo del segundo argumento mandamos el email
    // asi solo vamos disparar el evento cuando cambie el email. 
    useEffect(() => {
        // console.log('cambio el email');
    }, [email]);

    const handleInputChange = ({target}) =>{
        // console.log(target);
        setFormState(
            {
                ...formState,
                [target.name]: target.value
            }
        );
    };

    return (
        <>
         <h1>Ejemplo de useEffect en una forma</h1>
         <hr/>

         <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="ponga su nombre"
                value={name}
                onChange = { handleInputChange }
            />
         </div>

         <div className="form-group">
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="ponga su correo"
                value={email}
                onChange = { handleInputChange }
            />
         </div>

         { (name === 'alex') && <Message />}

        </>
    )
}
