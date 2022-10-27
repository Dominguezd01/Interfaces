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

