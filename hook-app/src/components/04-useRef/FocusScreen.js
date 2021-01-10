import React, { useRef } from 'react';
import '../css/style.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        // document.querySelector('input').focus();
        // document.querySelector('input').select();
        inputRef.current.select();
    };

    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>
            <input type="text"
                ref = { inputRef }
                className="form-control"
                placeholder="Ponga su nombre"
            ></input>

            <button className="btn btn-outline-primary mt-2"
                onClick={ handleClick }
            >
                focus
            </button>
        </div>
    )
}
