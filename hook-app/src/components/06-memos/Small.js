import React, { memo } from 'react'

export const Small = memo(( { value } ) => {
    console.log("componente small se ha llamado.");
    return (
        <small>{ value }</small>
    )
}
)