import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    
    const { heroeId } = useParams();

    // console.log("heroeId: ", heroeId);
    // const heroe = getHeroeById(heroeId);
    const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);
    // console.log("heroe: ", heroe);
    
    if( !heroe ){
        return <Redirect to="/notfound"/>
    }

    const handleReturn = () =>{
        // console.log(history.length, history);
        if(history.length <=2 ){
            // console.log('go home...');
            history.push('/home');
        } else {
            history.goBack();
        }
    };

    const {
        superhero, 
        publisher, 
        alter_ego, 
        first_appearance, 
        characters
    } = heroe;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img className="img-thumnail animate__animated animate__fadeInLeft"
                        alt={ superhero } 
                        src={`../assets/heroes/${heroeId}.jpg`} 
                        style={{ maxWidth: 200 }}
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3 className="card-title">{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Alterego: </strong>{ alter_ego }</li>
                    <li className="list-group-item"><strong>Editorial: </strong>{ publisher }</li>
                    <li className="list-group-item"><strong>Primera aparicion: </strong>{ first_appearance }</li>
                    {
                        (alter_ego !== characters 
                            && <li className="list-group-item"><strong>Otros nombres: </strong> { characters }</li> 
                        )
                    }
                </ul>
                <h5> Personajes: </h5>
                <p>{ characters }</p>

                <button className="btn btn-outline-info" 
                onClick={ handleReturn }>Regresar</button>
                
            </div>

        </div>
    )
}
