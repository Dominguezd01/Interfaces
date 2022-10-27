/*

    TINES TODO EXPLICADO EN COMENTARIOS PERO BASICAMENTE TE HE REORDENADO EL CODIGO
    PARA QUE TENGA SENTIDO LA ESTRUCTURA

*/
/*
    Al cargar la ventana cambia el coportamiento del onclick para que cada boton 
    llame a su propia funcion y ademas llamabas a la de cargar contexto siempre con
    el mismo canva por parametro, por lo cual no se ni como ni porque te cargaba 
    varias cosas a la vez pero siempre el triangulo, ahora cada funcion de dibujar 
    carga el contexto de su propio canva por parametro
*/
/*
window.onload = function () {
  let boton1 = document.getElementById("boton1")
  boton1.onclick = function () { idCanvasRecta("idCanvasRecta") }
  let boton2 = document.getElementById("boton2")
  boton2.onclick = function () { idCanvasCirculo("idCanvasCirculo") }
  let boton3 = document.getElementById("boton3")
  boton3.onclick = function () { idCanvasCuadrado("idCanvasCuadrado") }
  let boton4 = document.getElementById("boton4")
  boton4.onclick = function () { idCanvasTriangulo("idCanvasTriangulo") }
}
*/
window.onload = function () {
  document.querySelector("form")
    .addEventListener('submit', e => {
      e.preventDefault()
      const data = Object.fromEntries(
        new FormData(e.target)

      )
      asignarValo(data)
    })

}
   let mapOpciones = new Map()
   mapOpciones.set("Recta", 0)
              .set("Circulo", 0)
              .set("Cuadrado", 0)
              .set("Triangulo", 0)

const asignarValo = (dataForm) => {
  let datosFormulario = dataForm

  if (datosFormulario["form"] == "Recta" && comprobarDibujo(mapOpciones,datosFormulario["form"])) {
      idCanvasRecta("idCanvasRecta")
  }
  if (datosFormulario["form"] == "Circulo" &&comprobarDibujo(mapOpciones,datosFormulario["form"])) {
    idCanvasCirculo("idCanvasCirculo")
  }
  if (datosFormulario["form"] == "Cuadrado" &&comprobarDibujo(mapOpciones,datosFormulario["form"])) {
    idCanvasCuadrado("idCanvasCuadrado")
  }
  if (datosFormulario["form"] == "Triangulo" &&comprobarDibujo(mapOpciones,datosFormulario["form"])) {
    idCanvasTriangulo("idCanvasTriangulo")
  }

}


const comprobarDibujo = (opciones,forma) =>{
    console.log(opciones)
    if(opciones.get(forma)==0){
      opciones.set(forma, opciones.get(forma)+1)
      return true;
    }else{
      opciones.set(forma, opciones.get(forma)+1)
      console.log(opciones.get(forma))
      return false
    }
}
/*
    Esta funcion ahora devulve el contexto del canvas que le pasas por parametro que viene indicado en el
    onclick de cada boton en la funcion metida en el window.onload.
*/
const cargaContextoCanvas = (canva) => {
  var elemento = document.getElementById(canva);
  if (elemento && elemento.getContext) {
    var contexto = elemento.getContext("2d");
    if (contexto) {
      return contexto;
    }
  }
  return false;
}

// Función que se ejecuta al pulsar el boton "Recta"
const idCanvasRecta = (canvas) => {
  //Recibimos el elemento canvas
  var ctx = cargaContextoCanvas(canvas);
  if (ctx) {
    var c = document.getElementById(canvas);
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 150);
    ctx.stroke();
  } else {
    console.log("No se ha podido recuperar el contexto")
  }
};

// Funcion que se ejecuta al pulsar boton "Circulo"
const idCanvasCirculo = (canvas) => {
  //Recibimos el elemento canvas
  var ctx2 = cargaContextoCanvas(canvas);
  if (ctx2) {
    var c2 = document.getElementById(canvas);
    var ctx2 = c2.getContext("2d");
    ctx2.beginPath();
    ctx2.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx2.stroke();
  } else {
    console.log("No se ha podido recuperar el contexto")
  }
};

// Funcion que se ejecuta al pulsar boton "Cuadrado"
const idCanvasCuadrado = (canvas) => {
  //Recibimos el elemento canvas
  var ctx3 = cargaContextoCanvas(canvas);
  if (ctx3) {
    var c3 = document.getElementById(canvas);
    var ctx3 = c3.getContext("2d");
    ctx3.beginPath();
    ctx3.fillRect(25, 25, 100, 100);
    ctx3.stroke();
  } else {
    console.log("No se ha podido recuperar el contexto")
  }
};


// Funcion que se ejecuta al pulsar boton "Triangulo"
const idCanvasTriangulo = (canvas) => {
  //Recibimos el elemento canvas
  var ctx4 = cargaContextoCanvas(canvas);
  if (ctx4) {
    var c4 = document.getElementById(canvas);
    var ctx4 = c4.getContext("2d");
    ctx4.moveTo(5, 5);
    ctx4.lineTo(5, 100);
    ctx4.lineTo(150, 100);
    ctx4.closePath();
    ctx4.stroke();
  } else {
    console.log("No se ha podido recuperar el contexto")
  }
};
  /* ESTO NO TE HACE FALTA PERO LO HE DEJADO POR SI YO QUE SE, PERO ES MAS UN PROBLEMA QUE OTRA COSA. Att: Dominguez
Función que se ejecuta al cargar la ventana recta
window.onclick = function () {
//Recibimos el elemento canvas
var ctx = cargaContextoCanvas("idCanvasRecta");
var ctx = cargaContextoCanvas("idCanvasCirculo");
var ctx = cargaContextoCanvas("idCanvasCuadrado");
var ctx = cargaContextoCanvas("idCanvasTriangulo");
if (ctx) {
var c = document.getElementById("idCanvasRecta");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 150);
ctx.stroke();
var c = document.getElementById("idCanvasCirculo");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
var c = document.getElementById("idCanvasCuadrado");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.fillRect(25, 25, 100, 100);
ctx.stroke();
var c = document.getElementById("idCanvasTriangulo");
var ctx = c.getContext("2d");
ctx.moveTo(5, 5);
ctx.lineTo(5, 100);
ctx.lineTo(150, 100);
ctx.closePath();
ctx.stroke();
}
};
*//////////////////////////////////////////////
/*
function cargaContextoCanvas(idCanvasRecta) {
  var elemento = document.getElementById(idCanvasRecta);
  if (elemento && elemento.getContext) {
    var contexto = elemento.getContext("2d");
    if (contexto) {
      return contexto;
    }
  }
  return FALSE;
}
*/


/*
    // Para pintar un rombo
    ctx.beginPath();
    ctx.moveTo(50,5);
    ctx.lineTo(75,65);
    ctx.lineTo(50,125);
    ctx.lineTo(25,65);
    ctx.fill();
*/
/**
 *
 * Funcion para Recta
 */
/**
 * Funcion para circulo
 */
/*
    // Para pintar una línea
    var c = document.getElementById('idCanvas');
    var ctx = c.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 150);
    ctx.stroke();
*/
/*
    // Curva de Bezier
    ctx.beginPath();
    ctx.fillStyle = "#ccccff";
    ctx.moveTo(0,40);
    ctx.bezierCurveTo(75,17,70,25,100,60);
    ctx.bezierCurveTo(130,35,140,45,145,50);
    ctx.bezierCurveTo(180,45,190,55,200,70);
    ctx.lineTo(200,150);
    ctx.lineTo(0,150);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = 'rgba(100,230,100,0.3)';
    ctx.moveTo(0,90);
    ctx.bezierCurveTo(90,7,110,15,140,30);
    ctx.bezierCurveTo(130,55,140,65,145,70);
    ctx.bezierCurveTo(180,45,190,55,200,95);
    ctx.lineTo(200,150);
    ctx.lineTo(0,150);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'rgba(230,230,100,0.3)';
    ctx.moveTo(50,150);
    ctx.bezierCurveTo(90,7,110,15,160,10);
    ctx.bezierCurveTo(130,105,140,135,200,35);
    ctx.lineTo(200,150);
    ctx.lineTo(0,150);
    ctx.fill();
*/