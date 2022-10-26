function cargarCanvas(idCanvas) {
    let canvas = document.getElementById(idCanvas)
    if (canvas && canvas.getContext) {
        let contexto = canvas.getContext("2d")
        if (contexto) {
            return contexto
        }
        return false
    }
}

/*
window.onload = function modificarCanva() {
    let contextoCanva = cargarCanvas("myCanvas")

    if(contextoCanva){
       console.log(contextoCanva)
       contextoCanva.beginPath()
       contextoCanva.moveTo(50,5)
       contextoCanva.lineTo(59,76)
       contextoCanva.stroke()
    }
}
*/
window.onload = function introducirElementos(){
    let h1 = document.createElement("h1")

    h1.innerHTML = "Hola"

    let boton = document.createElement("button")
    let i = 0;
    let parrafoCont = document.createElement("p")

    parrafoCont.innerHTML = i;

    let boton2 = document.createElement("button")
    boton.onclick = function cambiarTexto (){
        if(h1.innerHTML == "Hola"){
            h1.innerHTML = "Adios"
        }else if(h1.innerHTML == "Adios"){
            h1.innerHTML = "Hola"
        }
    }
    boton2.onclick = function sumar (){
        i++;
        parrafoCont.innerHTML = i;
    }
    document.body.append(h1)
    document.body.append(boton)
    document.body.append(parrafoCont)
    document.body.append(boton2)
}

window.onload = function crearForm(){
    let form = document.createElement("form")

    form.innerHTML = "<input type ='text'/> <button id='botonForm' type='submit'>bot</button>"
    form.setAttribute("id","formulario")
    document.body.append(form)

    formulario()
}


function formulario(){
    let form = document.getElementById("formulario")
    let boton = document.getElementById("botonForm")

    boton.onsubmit 
    console.log(form)
}

