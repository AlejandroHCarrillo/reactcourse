import React from 'react';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {
    const initialLoginForm = {
        lEmail: '',
        lPassword: ''
    };
    const initialRegisterForm = {
        rName: '',
        rEmail: '',
        rPassword: '',
        rPassword2: ''
    };
    
    const [ formLoginValues, handleLoginInputChange, resetLogin ] = useForm( initialLoginForm );
    const {lEmail, lPassword } = formLoginValues;

    const [ formRegisterValues, handleRegisterInputChange, resetRegister ] = useForm( initialRegisterForm );
    const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(formLoginValues);
    };

    const handleRegister = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                onChange={ handleLoginInputChange }
                                value = { lEmail }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                onChange={ handleLoginInputChange }
                                value = { lPassword }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                onChange={ handleRegisterInputChange }
                                value = { rName }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                onChange={ handleRegisterInputChange }
                                value = { rEmail }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="rPassword"
                                onChange={ handleRegisterInputChange }
                                value = { rPassword }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="rPassword2"
                                onChange={ handleRegisterInputChange }
                                value = { rPassword2 }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}