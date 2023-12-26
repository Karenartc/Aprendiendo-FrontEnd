import React, {useState} from 'react'
import '../css/InfoBiblioteca.css'
import Contador from './Contador';

const nombre = "Biblioteca Nacional";
const horas = "Cierra a las 19:15hrs";
const telefono = "(2) 2328 2000";
const tipo = "Pública";

const direccion = {
    calle: 'Matucana',
    nro: '151',
    comuna: 'Santiago',
    region: 'Metropolitana',
    codPostal: '8350718'
}

const imagen = {
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Biblioteca_nacional_1.JPG',
    imagenSize: 200
}

const libros = [
    {titulo: 'Historia de Chile', isNovela: false, id:1},
    {titulo: 'La Casa de los Espíritus', isNovela: true, id:2},
    {titulo: 'Palomita Blanca', isNovela: true, id:3},
    {titulo: 'Geografía Política del Sur', isNovela: false, id:4}
] 

export default function InfoBiblioteca() {

    const [contador, setContador] = useState(0)

    function handleClick(){
        setContador(contador+1);
        // alert("Has gatillado el evento click");
    }

    const listaLibros = libros.map(libros => 
        <li key={libros.id} style={{color:libros.isNovela ? 'brown':'grey'}}>
            {libros.titulo}
        </li>
    );

    return (
        <div>
            <hr />
            <h2>{nombre}</h2>
            <p>La Biblioteca Nacional de Chile, principal centro bibliográfico del país, fue fundada el 19 de agosto de 18131​ y tiene su sede en la ciudad de Santiago. Se encuentra ubicada en la Alameda (Avenida Libertador General Bernardo O'Higgins) n.º 651, y es colindante con la salida «A» de la estación Santa Lucía del Metro de Santiago.</p>
            <picture>
                <img 
                    className='avatar'
                    src={imagen.imagenUrl}
                    alt={'Foto de' + nombre} 
                    style={{width: imagen.imagenSize, height: imagen.imagenSize}}
                ></img>
            </picture>
            <p><strong>Horas:</strong>{horas}</p>
            <p><strong>Teléfono:</strong>{telefono}</p>
            <p><strong>Tipo:</strong>{tipo}</p>
            <h3>Dirección</h3>
            <p>
                <strong>{direccion.calle} {direccion.nro} {direccion.comuna}</strong>
            </p>
            <hr />
            <h3>Libros más solicitados</h3>
            {listaLibros.length > 0 ? 
            (<ul>{listaLibros}</ul>)
            :
            (<p>No tenemos libros disponibles por ahora</p>)
            }
            <div>
                {/* Arregla los colores mujer */}
                <Contador texto='Me Gusta' color='#a9dda2'/>
                <Contador texto='No Me Gusta' color='#f34747'/>
            </div>
            <hr />
            <div>
                <button onClick={handleClick}>Haz Click acá {contador} veces</button>
            </div>
            <hr />
        </div>
    )
}
