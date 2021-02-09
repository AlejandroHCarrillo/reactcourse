import React from 'react';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm'
import { startRegisterWithEmailAndPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    // Aqui obtenemos la informacion del reducer en el store.
    // esto regresa un state el cual vamos a des estruccturar
    // Ejemplo: const msgError = state.msgError 
    const {msgError} = useSelector( state => state.ui );
    // console.log(msgError);

    // Elementos: valores de la forma
    const form = {
        name:'Alejo',
        email:'alejo@hotmail.com',
        password:'secreto123',
        password2:'secreto123'
    };

    const [formValues, handleInputChange] = useForm(form);

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e)=>{
        e.preventDefault();

        if (isFormValid()){
            // console.log("Formulario OK");
            dispatch(startRegisterWithEmailAndPassword(email, password, name));
        }

    };

    const isFormValid = () =>{
        // Swal.fire('titulo', 'message', 'error' );
        const alertTitle = 'Datos no validos';

        if(name.trim().length === 0) {
            const message = 'El nombre es requerido';
            dispatch( setError(message) );
            Swal.fire(alertTitle, message, 'error' );
            return false;
        } else if( !validator.isEmail(email) ){
            const message = 'El correo eletronico no es valido';
            dispatch( setError(message) );
            Swal.fire(alertTitle, message, 'error' );
            return false;
        }
        else if ( password.length <= 5) 
        { 
            const message = 'La longitud minima del password es de 6 caracteres';
            dispatch( setError(message) );
            Swal.fire(alertTitle, message, 'error' );
            return false;
        }
        else if(password !== password2){
            const message = 'La confimacion del passwod no cohincide';
            dispatch( setError(message) );
            Swal.fire(alertTitle, message, 'error' );
            return false;
        }

        dispatch( removeError());

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }
                className="animate__animated animate__fadeIn animate__faster"
            >

                {
                    msgError && 
                    ( 
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name} 
                    className="auth__input"
                    autoComplete="off"
                    onChange = { handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    className="auth__input"
                    autoComplete="off"
                    onChange = { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    className="auth__input"
                    onChange = { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    className="auth__input"
                    onChange = { handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
