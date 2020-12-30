import React, { useState } from 'react'
import PropTypes from 'prop-types'
// setCategories es la funcion del componente padre
// la recibimos por medio de las PropTypes y la desestrucramos usando {}
export const CategoryAdd = ( { setCategories } ) => {
    const initialState = "";
    const [inputValue, setInputValue] = useState(initialState);

    const inputChangeHandler = (e) =>{
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();        
        
        if (inputValue.trim().length>0){
            setCategories( cats => [...cats, inputValue ]);
            setInputValue("");
            console.log("Enviado");
        }
    }

    return (
        <form onSubmit = { submitHandler }>
          <h2>{ inputValue }</h2>
          <input type="text"
                value = { inputValue }
                onChange = { inputChangeHandler }
          ></input>  
        </form>
    )
}

// En esta seccion usamos los PropTypes para hacer requerida 
// la funcion setCategories del componente padre
CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}