import React from 'react'
import { HeroesList } from '../heroes/HeroesList'
import { SearchScreen } from '../search/SearchScreen'

export const HomeScreen = () => {
    return (
        <>
            <h1>Heroes en accion</h1>
            <p>Single Page Application Heroes de ejemplo del curso de react</p>
            <HeroesList />
        </>
    )
}
