import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './routers/AppRouter'

import dotenv from 'dotenv'
dotenv.config();

export const CalendarApp = () => {

    return (
        <Provider store={store} >
            <h1>Entorno: { process.env.NODE_ENV }</h1>
            <h1>Secret code: { process.env.REACT_APP_NOT_SECRET_CODE }</h1>
            <AppRouter />
        </Provider>
    )
}
