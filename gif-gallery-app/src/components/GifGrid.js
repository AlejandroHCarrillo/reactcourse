// import React, { useEffect, useState } from 'react'
import React, { createRef } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GridItem } from './GridItem';

const GifGrid = ( { category } ) => {

    // console.log(category);
    const { data: images, loading} = useFetchGifs( category );

    // console.log( images, loading);

    // const [images, setImages] = useState([]);
    // useEffect( () => {
    //     getGifs(category).then( setImages )
    // }, [category])
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className=" animate__animated animate__flash">'Cargando...'</p> }
            <div className="card-grid">
                { images.map( img => (
                    <GridItem key={img.id} img={img} />
                )) 
                }
            </div>
        </>
    )
}

export default GifGrid