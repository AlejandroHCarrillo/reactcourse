import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import {AboutScreen} from "./AboutScreen"
import {LoginScreen} from "./LoginScreen"
import {HomeScreen} from "./HomeScreen"
import { NavBar } from './NavBar';

export const AppRouter = () => {
    
    return (
        <Router>
            <div className="container">
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    {/* Cuando una ruta no existe te direcciona a Home */}
                    {/* <Route component={ HomeScreen } /> */}
                    {/* Segundo metodo para redireccionar al home */}
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>

    )
}
