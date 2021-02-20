import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () =>{
        setUser({
                    id: 1234,
        nombre: 'Alejandro',
        email: 'alex@hotmail.com'
        });
    };

    return (
        <>
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-success" 
                onClick={ handleLogin }
            >
                Login
            </button>
        </>
    )
}
