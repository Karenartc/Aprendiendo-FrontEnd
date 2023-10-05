// Ejemplo de Canvas.
function drawPicture(){
	 // Primero se recupera el objeto canvas a modificar
	var canvas1 = document.getElementById('figuras');
	 // Luego se le indicar la forma de trabajar 2D o 3D 
	var context = canvas1.getContext('2d');
	 // Se comienza a dibujar en el lienzo utilizando objetos  
	// gráficos   
	context.fillStyle = "rgb(0,255,0)"; //Setea el color
	context.fillRect (25, 25, 100, 100); //Contruye un rectángulo 
	context.fillStyle = "rgba(255,0,0, 0.6)"; //Setea color y grado de transparencia.
  
	context.beginPath();
	context.arc(125,100,50,0,Math.PI*2,true); //PI corresponde a 180° 
	context.fill();
	context.fillStyle = "rgba(0,0,255,0.6)";
	
	context.beginPath();
	context.moveTo(125,100); //Define un punto en la coordenanda indicada.
	context.lineTo(175,50);  //Traza una línea desde la coordenada definida en moveTo, al punto indicado.
	context.lineTo(225,150); //Traza una línea desde la última coordenada definida, al punto indicado.
	context.fill(); //Rellena la figura definida.
	
	var canvas2 = document.getElementById('sombras');
	
	// Luego se le indicar la forma de trabajar 2D o 3D 
	var context = canvas2.getContext('2d');
	//*/ Cuadro con sombra
	context.shadowOffsetX=-10;
	context.shadowOffsetY=5;
	context.shadowBlur=10;
	context.shadowColor="rgba(0, 0, 255, 0.5)";
	context.fillStyle="rgb(0,0,255)";
	//context.fillRect(20,20,150,100);
	context.fillRect(25,25,100,100);
	context.shadowOffsetX=5;
	//context.fillRect(250,20,100,100);
 
}
