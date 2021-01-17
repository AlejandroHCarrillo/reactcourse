import React from 'react'
import { Link } from 'react-router-dom'

export const HeroeCard = ( { 
                            id, 
                            superhero, 
                            publisher, 
                            alter_ego, 
                            first_appearance, 
                            characters
                        } ) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 340 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img"
                        alt={ superhero } 
                        src={`./assets/heroes/${id}.jpg`} 
                        style={{ maxWidth: 200 }}
                    />
                </div>

                <div className="col-md-8">

                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>
                        {
                            (alter_ego !== characters 
                            && <p className="card-text">{characters}</p> )
                        }

                        <p className="card-text">
                            {                                
                                publisher.toLocaleLowerCase().includes("dc")
                                ?<img className="card-img"
                                alt={ publisher }
                                src={`./assets/heroes/DC_Logo.png`} 
                                style={{ maxWidth: 20 }}
                            />
                                :<img className="card-img"
                                alt={ publisher } 
                                src={`./assets/heroes/Marvel-Logo.jpg`} 
                                style={{ maxWidth: 20 }}
                            />                                
                            } 
                             </p>
                        <p className="card-text">
                            <small>{first_appearance}</small>
                        </p>

                        <Link to={`./heroe/${id}`}>
                            Ver mas...
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
