import { useState } from "react";

// Este hook recibe los valores de in formulario como estado inicial
// tambien recibe el target de un evento, esto es in control
// en este target tenemos el nombre del control y el valor
// creamos el nuevo estado con todos los valores del formulario
// y al final actualizamos el valor del control que estamos editando
// para saber el nombre del current target usamos []
// el handleInputChange es la funcion que se encarga de actualizar los valores del control
// el handleInputChanges se regresa junto con el nuevo estado para que sea usado afuera
export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const reset = () => {
        setFormValues(initialState);
    }


    const handleInputChange = ({target}) =>{
        // console.log(target);
        setFormValues(
            {
                ...formValues,
                [target.name]: target.value
            }
        );
    };

    return [formValues, handleInputChange, reset];

}
