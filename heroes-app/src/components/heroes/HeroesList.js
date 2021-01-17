import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroesList = ( { publisher } ) => {

    // const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="animate__animated animate__fadeIn" style={{ display:'flex', flex:1,  flexDirection:'row', flexWrap:'wrap' }} >
            { heroes.map( ( hero ) => {
                    return(<HeroeCard key={ hero.id } {...hero} />
                    )
                })
            }
        </div>
    )
}
