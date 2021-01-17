import { heroes } from "../../data/heroes";

export const getHeroeById = ( heroId ) =>{
    return heroes.find( h => h.id === heroId );
}