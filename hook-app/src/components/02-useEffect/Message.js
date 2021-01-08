import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCords] = useState({ x:0, y:0});
    const {x, y} = cords;

    useEffect(() => {
        console.log('Componente montado');

        // Este evento es referenciada en la constante mouseMove 
        // recibe el evento y extrae las coordenadas del puntero del mouse
        // despues establece las coordenadas usando el (setState)        
        const mouseMove = (e) => {
            const cords = {x: e.x, y:e.y};
            setCords(cords);
        };

        // Habilitamos el event listener del mouse move 
        // y usamos la referencia al evento.
        window.addEventListener('mousemove', mouseMove);

        // Cuando terminamos de usar el event listener 
        // lo removemos usando la misma rederencia a mouseMove
        return () => {
            console.log('Componente DESmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>U R great!!</h3>

            <p>
                (x:{x}, y:{x})
            </p>
        </div>
    )
}
