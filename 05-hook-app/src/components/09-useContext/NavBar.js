import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Navbar</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to='/'      activeClassName="active" className="nav-link" exact >Home</NavLink>
                    <NavLink to="/about" activeClassName="active" className="nav-link" exact >About</NavLink>
                    <NavLink to="/login" activeClassName="active" className="nav-link" exact >Login</NavLink>
                </div>
                </div>
            </div>
        </nav>

    )
}
