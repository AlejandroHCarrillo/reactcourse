import React from 'react'
import PropTypes from 'prop-types'

export const GridItem = ( {title, url} ) => {
    // console.log(img);
    return (
        <div className="card animate__animated animate__fadeIn">
                <img src={url} alt={title}></img>
                <p>{title}</p>
        </div>
    )
}

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
