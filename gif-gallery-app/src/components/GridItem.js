import React from 'react'

export const GridItem = ( {img} ) => {
    // console.log(img);
    return (
        <div className="card animate__animated animate__fadeIn">
                <img src={img.url} alt={img.title}></img>
                <p>{img.title}</p>
        </div>
    )
}
