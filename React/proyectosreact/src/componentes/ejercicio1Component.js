import React, {useState} from 'react';

export const ejercicio1Component = (anio) => {

    // Usar userState
    const [anioActual, setAnioActual] = useState(anio);
    const siguiente = () => {
        setAnioActual(anioActual + 1)
    }
    
    const anterior = () => {
        setAnioActual(anioActual -1)
    }
    
    const cambiaAnio = (e) => {
        let dato = parseInt(e.target.value) 
        if (Number.isInteger(dato)) {
            setAnioActual(dato)
        } else {
            setAnioActual(anio)
        }
    }

    return (
        <div>
            <h2>Ejercicio 1 </h2>
            <strong>
                {anioActual}
            </strong>
            <p>
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </p>
            <p>
                <label>Cambiar anio</label>
                <input onChange={cambiaAnio} type='text' placeholder='Cambia el anio'></input>
            </p>
        </div>
    )
}
