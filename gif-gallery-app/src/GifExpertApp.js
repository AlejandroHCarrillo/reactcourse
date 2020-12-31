import React, { useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

// Usar snipped rafc para crear el esquleto del compnente
export const GifExpertApp = () => {

    const initialState = ['batman'];
    const [categories, setCategories] = useState(initialState);
    
    // const handleAdd = () =>{
    //     // categories.push('Wonder Woman');
    //     let newItem = 'Wonder Woman';
    //     // setCategories([...categories, newItem]);
    //     setCategories( cats => [...cats, newItem ]);
    // }
    
    return (
        <>
          <h2>GifExpertApp</h2>
          < CategoryAdd setCategories = { setCategories } />
          <hr/>  
          {/* <button onClick={ handleAdd }>Agregar</button> */}
          <ol>
              { categories.map( category => (
                  <GifGrid key={category} category = {category} />
                )) 
              }
          </ol>
        </>
    )
}
