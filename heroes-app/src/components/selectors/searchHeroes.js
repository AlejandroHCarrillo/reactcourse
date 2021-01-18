import { heroes } from "../../data/heroes";

export const searchHeroes = ( searchPhrase = '' ) =>{
    console.log('searchPhrase: ', searchPhrase);
    if( searchPhrase === '' ){
        return [];
    }

    if( searchPhrase === 'all' ){
        return heroes;
    }

    return heroes.filter( h => {
        return (h.superhero.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase() ) 
        || h.publisher.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase() )
        || h.alter_ego.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase() )
        || h.characters.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase() )
        );
} );

}