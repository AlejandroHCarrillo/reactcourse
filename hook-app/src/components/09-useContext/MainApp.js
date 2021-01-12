import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainScreen = () => {
    // const user = {
    //     id: 1234,
    //     nombre: 'Alejandro',
    //     email: 'alex@hotmail.com'
    // }
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={   {
                                            user, 
                                            setUser 
                                        }
                                    }
        >
            <AppRouter/>
        </UserContext.Provider>
    )
}
