import React from 'react'
// import PropTypes from 'prop-types'

export const GridItem = ( {title = "no title", url = "no url"} ) => {
    // console.log(title, url);
    return (
        <div className="card animate__animated animate__fadeIn">
                <img src={url} alt={title}></img>
                <p>{title}</p>
        </div>
    )
}

// GridItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// }
