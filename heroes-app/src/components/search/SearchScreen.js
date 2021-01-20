import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { searchHeroes } from '../selectors/searchHeroes';


export const SearchScreen = ({ history }) => {

    const location = useLocation();
    // console.log("url location search: ", location.search);

    const { q='' } = queryString.parse(location.search);

    // console.log("q:", q);

    // console.log("searchTextparam: ", searchTextParam);
    
    const [ { busquedaText }, taskInputChangeHandler, reset ] = useForm({
        busquedaText: q
    });

    const heroesFiltered = useMemo(() => searchHeroes(q), [q]);
    // console.log("heroesFiltered: ", heroesFiltered);
    
    const handleSearch = (e) => {
        e.preventDefault();
            history.push(`?q=${busquedaText}`);
        };
        

    return (
        <div>
            <h1>Busquedas</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Buscar:</h4>
                    <hr/>
                    <form onSubmit={ handleSearch } className="d-grid gap-2">
                        <input type="text"
                        name="busquedaText"
                        className="form-control" 
                        placeholder="Buscar heroe..."
                        value = { busquedaText }
                        onChange={ taskInputChangeHandler }                        
                        />
                        <button type="submit" 
                            className="btn m-1 btn-block btn-outline-warning" >
                            Buscar</button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Resultados encontrados ({ heroesFiltered.length })</h4>
                    <hr/>
                    {
                        q !== '' && heroesFiltered.length===0  && <p className="alert alert-danger" role="alert">No se encontraron heroes con ese criterio de busqueda "{ q }"</p>
                    }
                    {
                        heroesFiltered.map( h => {
                            return(<HeroeCard key={h.id} {...h}/> )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
