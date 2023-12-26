// JavaScript Document
function anade() {

    //Crear un nuevo elemento "li"
    let elementoLi = document.createElement("li");
    
    //Crear el texto del elemento "li"
    let textoLi = document.createTextNode("Nuevo texto para el 'li'");

    //Se deja en texto como hijo del elemento "li"
    elementoLi.appendChild(textoLi);

    //Se identifica la lista y se le agrega el "li"
    document.getElementById("lista").appendChild(elementoLi);

}
