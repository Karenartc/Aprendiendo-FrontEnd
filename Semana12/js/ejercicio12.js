// JavaScript Document
function muestra() {

    //se obtiene el objeto del Spam
    bloqueSpam = document.getElementById("adicional");
    
    //Se modifica la clase que posee el objeto bloqueSpam. Atributo "ClassName"
    bloqueSpam.className = "visible";

    //Se accede al objeto del enlace y se oculta
    document.getElementById("enlace").className = "oculto";

}
