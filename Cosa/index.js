let h1 = document.getElementById("h1")

h1.innerHTML = "Hola"

function modificarTexto() {
    if(h1.innerText == "Adios"){
        h1.innerText= "Hola"
    }else if(h1.innerText== "Hola"){
        h1.innerText= "Adios"
    }
    let newH3 = document.createElement("h3")
    newH3.innerHTML = "Que tal"
    document.body.append(newH3)
}

let boton2 = document.createElement("button")
boton2.innerHTML = "Boton2"

boton2.addEventListener("onclick", function(){
    let textoInsertar = document.createElement("p")
    textoInsertar.innerHTML = "Insertado con el botn"
    document.body.append(textoInsertar)
})
document.body.append(boton2)
document.body.append(h1)
