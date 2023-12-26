function muestraOcultaCuriosidad() {
    //Obtener los objetos a utilizar
    let ancla = document.getElementById("enlaceCuriosidad");
    let parrafo = document.getElementById("pCuriosidad");

    //Dejar el parrafo oculto y cambiar el texto del enlace a Mostrar
    if(parrafo.style.display == "" || parrafo.style.display == "block"){
        parrafo.style.display = "none";
        ancla.innerHTML = "Leer más";
    } else {
        parrafo.style.display = "block";
        ancla.innerHTML = "Leer menos";
    }    
}




muestraOcultaCuriosidad();