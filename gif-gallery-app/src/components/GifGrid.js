import { react } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';
import PropTypes from 'prop-types'

export const GifGrid = ( { category } ) => {

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
                    <GridItem key={img.id} img = { img } />
                )) 
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}