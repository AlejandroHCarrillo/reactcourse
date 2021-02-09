import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch();

    // con este estado verifico si el usuario ya esta autenticado
    const [checkIn, setCheckIn] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Este efecto mantiene la autentificacion en caso de recargar el browser
    useEffect(() => {
        firebase.auth().onAuthStateChanged( async(user) =>{
            // si estoy autenticado
            if (user?.uid){
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);

                dispatch( startLoadingNotes(user.uid) );

            }

            // Cuando el usuario este autenticado
            setCheckIn(false);
        } );
    }, [dispatch, setCheckIn]);

    if( checkIn ){
        return(
            <h1> Espere un momento...</h1>
        )
    } 

    return (
        <Router>
            <div>
                <Switch>
                    {/* Rutas sin proteger 
                    <Route path="/auth" component={ AuthRouter }/>
                    <Route exact path="/" component={ JournalScreen }/> 
                    */}
    
                    <PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={ isLoggedIn } />
                    <PrivateRoute path="/" component={ JournalScreen } isAuthenticated={ isLoggedIn } />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
