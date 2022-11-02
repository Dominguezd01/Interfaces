window.onload = function () {
    cargarForm()
    h1Usuario()
}
const cargarForm = () => {
    document.querySelector("form")
        .addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries(
                new FormData(e.target)

            )
            let etiqueta = document.getElementById("etiquetaForm2")
            etiqueta.innerHTML =""
            comprobarValores(data)
            console.log(data)
        })
}

const comprobarValores = (data) => { 
    if(data.nombre == ""){
        changeLabel("Introduce un nombre")
  
    }
    if(data.apellidos == ""){
        changeLabel("Introduce unos apellidos")
     
    }
    if(data.fechaNac == "" ||  new Date (data.fechaNac)> new Date()){
        changeLabel("Introduce una fecha de nacimiento válida")
    
    }
    if (data.dni.match(/[A-Z]/)== false || data.dni.length != 9) {
        changeLabel("Introduce un DNI válido")
 
    }
    if(data.calle == ""){
        changeLabel("Introduce la calle")
   
    }
    if(data.numero == "" ||isNaN(data.numero)){
        changeLabel("Introduce un número válido en el apartado <i>Dirección</i>")
    
    }
    if(data.ciudad == ""){
        changeLabel("Introduce una ciudad")
  
    }
    if(isNaN(data.codPostal) || data.codPostal == ""){
        changeLabel("Introduce un código postal válido")

    }
    if(data.provincia == ""){
        changeLabel("Introduce una provincia")
        return false
    }
    if(isNaN(data.numTlf)|| data.numTlf.length != 9){
        changeLabel("Introduce un número de telefono válido")

    }
    if(data.email == ""){
        changeLabel("Introduce un correo")

    }
}
const h1Usuario = () => {
    let h1Usuarios = document.getElementById("h1Usuario")
    h1Usuarios.innerHTML += "Hola " + localStorage.getItem("nomUsuario") + " introduce tus datos"
    document.body.append(h1Usuarios)

    mostrarForm()
}

const mostrarForm = () => {
    let form2 = document.getElementById("form2")

    form2.style.display = " block"
    document.body.append(form2)
}

const changeLabel = (text) =>{
    let etiqueta = document.getElementById("etiquetaForm2")
    etiqueta.innerHTML += `${text}<br>`
    etiqueta.style.display = "block"
    etiqueta.style.color = "orange"


}




