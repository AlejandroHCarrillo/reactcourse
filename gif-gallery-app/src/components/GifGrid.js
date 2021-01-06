import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';
import PropTypes from 'prop-types'

export const GifGrid = ( { category } ) => {

    // console.log(category);
    const { data: images, loading} = useFetchGifs( category );

    // console.log( 'gifgrid', images, loading);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className=" animate__animated animate__flash">'Cargando...'</p> }
            <div className="card-grid">
                { images.map( img => (
                    // <GridItem key={img.id} img = { img } />
                    <GridItem key={img.id} title = { img.title } url = { img.url } />
                )) 
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}