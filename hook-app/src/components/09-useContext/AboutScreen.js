import React, { useContext } from 'react'
import "../css/style.css"
import { UserContext } from './UserContext';

export const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = () =>{
        setUser({});
    };

    return (
        <>
            <h1>About</h1>
            <hr/> 
            <pre>
                { JSON.stringify(user, null, 2) }
            </pre>

            <button className="btn btn-warning" 
                onClick={ handleLogout }
            >
                Logiout
            </button>
        </>
    )
}
