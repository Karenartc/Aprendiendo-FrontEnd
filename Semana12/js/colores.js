let color = prompt("Indique el color de fondo: \n1. Amarillo \n2. Rojo \n3. Verde \n4. Negro ", "1");

//Se evalua el color
switch(color){
    case "1": 
        document.body.style.backgroundColor="#fff1cc";  
        break;
    case "2": 
        document.body.style.backgroundColor="red";  
        break;
    case "3": 
        document.body.style.backgroundColor="green";  
        break;
    case "4": 
        document.body.style.backgroundColor="black";  
        document.body.style.color="white";  
        break;

}