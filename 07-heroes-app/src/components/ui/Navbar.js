import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = ( ) => {
    const { user, dispatch } =  useContext(AuthContext);

    //hook de history para acceder al 
    const history = useHistory();
    
    // const handleLogin = () => {
    //     // history.push('/login');
    // }

    const handleLogout = () => {
        // console.log('Boton logout clicked!!!');
        history.replace('/login');
        dispatch({
            type: types.logout
        });
        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
                <h1>H</h1>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/darkhorse"
                    >
                        Dark Horse
                    </NavLink>
                    <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Buscar
                        </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">{user.name}</span>
                    <button className="nav-item nav-link btn"
                    onClick={ handleLogout }
                    >Logout</button>                    
                </ul>
            </div>
        </nav>
    )
}