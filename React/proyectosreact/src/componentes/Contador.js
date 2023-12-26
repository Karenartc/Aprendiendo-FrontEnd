import React, {useState} from 'react'

export default function Contador({texto}, {color}) {
    
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
        alert("Gracias por tu votacion");
    }

    return (
        <div>
            <button onClick={handleClick} style={{backgroundColor: color}}>
                {
                    contador === 0 ? ("No hay votacion") : (contador + " " + texto)
                }
            </button>
        </div>
    )
}

