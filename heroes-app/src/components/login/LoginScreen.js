import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } =  useContext(AuthContext);
    
    const handleClick = () => {
        // console.log("Login click");
        dispatch({
            type: types.login,
            payload: {
                name: "Alejandro",
                logged: true
            }
        });
        
        const lastPath = localStorage.getItem('lastPath')||'/home';
        if(lastPath!==''){
            history.replace(lastPath);
        } else{
            history.replace('/home');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <hr/>

            <button className="btn btn-primary"
                onClick={ handleClick }
            >
                Login
            </button>
        </div>
    )
}
