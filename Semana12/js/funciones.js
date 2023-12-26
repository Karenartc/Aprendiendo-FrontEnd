//Funciones con retorno
function comer(persona, comida){
    return persona + " come " + comida;
}

//Funciones sin retorno (escribir en el documento)
function comer2(persona, comida){
    document.write(persona + " esta comiendo " + comida);
}

//Funciones sin retorno sin argumentos
function comer3(){
    document.write(arguments[0] + " sigue comiendo " + arguments[1]);
}

//Funciones anonimas (se pueden asignar a un objeto)
var comer4 = function(persona, comida){
    return persona + " cena " + comida;
}

//Funciones anonimas (tipo flecha)
var comer5 = (persona, comida) => {
    return persona + " ordena " + comida;
}