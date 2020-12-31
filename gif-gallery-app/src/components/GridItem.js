import React from 'react'

export const GridItem = ( {img} ) => {
    // console.log(img);
    return (
        <div className="card">
                <img src={img.url} alt={img.title}></img>
                <p>{img.title}</p>
        </div>
    )
}
