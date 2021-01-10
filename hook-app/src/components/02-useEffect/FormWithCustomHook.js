import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import '../css/style.css'

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'', 
        password: ''
    });

    // desestructuramos los valores
    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('Cambio el correo');
    }, [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={ handleSubmit }>
         <h1>Ejemplo de useEffect en una forma con un HOOK PESONALIZADO</h1>
         <hr/>

         <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="ponga su nombre"
                autoComplete="off"
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
                autoComplete="off"
                value={email}
                onChange = { handleInputChange }
            />
         </div>

         <div className="form-group">
            <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="****"
                value={password}
                onChange = { handleInputChange }
            />
         </div>

        <button type="submit" className="btn btn-primary">Guardar </button>
        </form>
    )
}
