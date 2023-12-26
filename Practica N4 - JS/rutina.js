// Declaración de variables
let rut;
let nombre;
let nacimiento;
let celular;

// Ingreso de Datos por parte del usuario
rut = window.prompt("Indica tu rut: ", "27814779-7");
nombre = window.prompt("Indica tu nombre: ", "Karen Rodríguez");
nacimiento = window.prompt("Indica tu fecha de nacimiento: ", "07-10-2004");
celular = window.prompt("Indica tu celular: ", "75888420");

// Formatear el rut
let rutFormateado = rut.replace("-", " | ");

// Formatear la fecha de nacimiento
let nacimientoFormateada = nacimiento.split("-").reverse().join("");

// Separar el nombre en nombre y apellido
let nombreCompleto = nombre.split(" ");
let apellido = nombreCompleto.pop(); 
let nombreUsuario = nombreCompleto.join(" "); 

// Mostrar los datos formateados usando document.write
document.write(rutFormateado + " | " + apellido + " | " + nombreUsuario + " | " + nacimientoFormateada + " | +569" + celular);