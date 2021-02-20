import React from 'react'

export const ShowIncrement = React.memo(( { increment } ) => {
    console.log("Se llemo showincrement.");
    return (
        <button
            className="btn btn-primary"
            onClick = { () => {
                increment(5);
            } }
        >
            +
        </button>
    )
});
