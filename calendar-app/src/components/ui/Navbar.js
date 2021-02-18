import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        console.log("iniciando logout...");
        dispatch( startLogout() );
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
               Hola: { name } 
            </span>

            <button className='btn btn-outline-warning'>
                <span className="fas fa-sign-out-alt" onClick={ handleLogout } > Salir</span>
            </button>

        </div>
    )
}
