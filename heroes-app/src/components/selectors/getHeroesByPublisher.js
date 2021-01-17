import { heroes } from "../../data/heroes";

export const getHeroesByPublisher = ( publisher='all' ) =>{
    const validPublishers = ['all', 'DC Comics', 'Marvel Comics'];

    if(! validPublishers.includes(publisher) ){
        throw new Error(`La editorial ${ publisher} no es valida `);
    }

    if ( !publisher || publisher==='' || publisher === 'all'){
        return heroes;
    }

    return heroes.filter( h => h.publisher === publisher );

}