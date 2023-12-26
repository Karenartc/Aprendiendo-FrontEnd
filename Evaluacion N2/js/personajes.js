function agregarComentario() {
    let nuevoComentarioTexto = document.getElementById('nuevo-comentario-texto').value;

    if (nuevoComentarioTexto.trim() === '') {
        alert('Por favor, ingresa un comentario válido.');
        return;
    }

    let comentariosLista = document.getElementById('comentarios-lista');

    let comentarioDiv = document.createElement('div');
    comentarioDiv.className = 'comentario';
    
    let comentarioTexto = document.createElement('p');
    comentarioTexto.textContent = nuevoComentarioTexto;
    
    let eliminarBoton = document.createElement('button');
    eliminarBoton.textContent = 'Eliminar';
    eliminarBoton.addEventListener('click', () => eliminarComentario(comentarioDiv));

    comentarioDiv.appendChild(comentarioTexto);
    comentarioDiv.appendChild(eliminarBoton);

    comentariosLista.appendChild(comentarioDiv);

    // Limpiar el área de comentario después de agregarlo
    document.getElementById('nuevo-comentario-texto').value = '';
}

function eliminarComentario(comentarioDiv) {
    comentarioDiv.parentNode.removeChild(comentarioDiv);
}

// Otras funciones...

// Función para mostrar el texto al dar click y ocultar al dar doble click
function mostrar(idImagen, idTexto) {
    let img = document.getElementById(idImagen);
    let texto = document.getElementById(idTexto);

    img.addEventListener('mouseover', () => {
        texto.style.display = 'block';
    });

    img.addEventListener('mouseout', () => {
        texto.style.display = 'none';
    });
}

// Llamadas a la función para cada par de imagen y texto
mostrar("AlexHam", "AlexHam-texto");
mostrar("AaronBurr", "AaronBurr-texto");
mostrar("Eliza", "Eliza-texto");
mostrar("Angelica", "Angelica-texto");
mostrar("Peggy", "Peggy-texto");
mostrar("John", "John-texto");
mostrar("Lafayette", "Lafayette-texto");
mostrar("Mulligan", "Mulligan-texto");
mostrar("Washington", "Washington-texto");
mostrar("III", "III-texto");
mostrar("Philip", "Philip-texto");
mostrar("Maria", "Maria-texto");
mostrar("Jefferson", "Jefferson-texto");
mostrar("Madison", "Madison-texto");
