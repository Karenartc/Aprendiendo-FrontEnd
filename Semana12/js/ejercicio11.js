// JavaScript Document
window.onload = function() {

	// Numero de enlaces de la pagina.
	let arrAnclas = document.getElementsByTagName("a");
	//window.alert("Cantidad de enlaces: " + arrAnclas.length);
	let info = document.getElementById("info");
	info.innerHTML = "<div>Cantidad de anclas: " + arrAnclas.length + "</div>";
	
	// Direccion (href) del penultimo.
	let penultimo = arrAnclas [arrAnclas.length - 2];
	info.innerHTML += "<div>Href del penultimo enlaces es: " + penultimo.href + "</div>";
	
	// Numero de enlaces que apuntan a http://prueba
	contador = 0;
	for (i = 0; i < arrAnclas.length; i++){
		if (arrAnclas[i].href == "http://prueba/"){
			contador++;
		}
	}
	info.innerHTML += "<div>Enlaces que apuntan a 'http://prueba/' son: " + contador + "</div>";
	
	// Numero de enlaces del tercer párrafo
	let parrafos = document.getElementsByTagName("p");
	let anclasTercero = parrafos[2].getElementsByTagName("a");
	info.innerHTML += "<div>Cantidad de anclas del tercer parrafo: " + anclasTercero.length + "</div>";


}
