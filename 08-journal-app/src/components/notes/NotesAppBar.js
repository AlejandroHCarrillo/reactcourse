import React from 'react'
import moment from 'moment';
import { startSavingNote, startUploading } from '../../actions/notes';
import { useDispatch, useSelector } from 'react-redux';

export const NotesAppBar = ( {date} ) => {
    const noteDate = moment(date);
    const dispatch = useDispatch()
    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(startSavingNote(active));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
        
    }

    const handleFileChange = (e) => {

        const file = e.target.files[0];

        if ( file ){
            dispatch( startUploading(file) );
        }

    }

    return (
        <div className="notes__appbar">
            <span>{ noteDate.format('LLLL') }</span>

            <input type="file" 
                id="fileSelector"
                name="file"
                style={{display:'none'}}
                onChange = { handleFileChange }
            ></input>

            <div>
                <button className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
