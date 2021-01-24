import React from 'react'
import moment from 'moment';

export const NotesAppBar = ( date ) => {
    const noteDate = moment(date);

    return (
        <div className="notes__appbar">
            <span>{ noteDate.format('LLLL') }</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
