// JavaScript Document
function muestraOculta(nro) {

    //Obtener los objetos a utilizar
    let ancla = document.getElementById("enlace_" + nro);
    let parrafo = document.getElementById("contenidos_" + nro);

    //Dejar el parrafo oculto y cambiar el texto del enlace a Mostrar
    if(parrafo.style.display == "" || parrafo.style.display == "block"){
        parrafo.style.display = "none";
        ancla.innerHTML = "Mostrar contenidos";
    } else {
        parrafo.style.display = "block";
        ancla.innerHTML = "Ocultar contenidos";
    }

    //

}
