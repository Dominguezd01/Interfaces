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
            etiqueta.innerHTML = ""
            comprobarValores(data)
        })
}

const comprobarValores = (data) => {
    if (data.nombre == "") {
        
        changeLabel("Introduce un nombre", "nom")

    } else {
        localStorage.setItem("nombre", data.nombre)
    }
    if (data.apellidos == "") {
        changeLabel("Introduce unos apellidos", "apellido")

    } else {
        localStorage.setItem("apellido", data.apellidos)
    }
    if (data.fechaNac == "" || new Date(data.fechaNac) > new Date()) {
        changeLabel("Introduce una fecha de nacimiento válida", "fecha")

    } else {
        localStorage.setItem("fechaNac", data.fechaNac)
    }
    if (checkDni(data.dni) == false || data.dni.length != 9) {
        changeLabel("Introduce un DNI válido", "dni")

    } else {
        localStorage.setItem("dni", data.dni)

    }

    if (data.calle == "") {
        changeLabel("Introduce la calle", "calle")

    } else {
        localStorage.setItem("calle", data.calle)
    }
    if (data.numero == "" || isNaN(data.numero)) {
        changeLabel("Introduce un número válido en el apartado <i>Dirección</i>","num")

    } else {
        localStorage.setItem("numero", data.numero)
    }
    if (data.ciudad == "") {
        changeLabel("Introduce una ciudad","ciudad")

    } else {
        localStorage.setItem("ciudad", data.ciudad)
    }
    if (isNaN(data.codPostal) || data.codPostal == "") {
        changeLabel("Introduce un código postal válido","codPostal")

    } else {
        localStorage.setItem("codPostal", data.codPostal)
    }
    if (data.provincia == "") {
        changeLabel("Introduce una provincia", "prov")

    } else {
        localStorage.setItem("provicia", data.provincia)
    }
    if (Number.isInteger(data.NumTlf) || data.numTlf.length != 9) {
        changeLabel("Introduce un número de telefono válido", "tel")

    } else {
        localStorage.setItem("numTlf", data.numTlf)
    }
    if (data.email == "") {
        changeLabel("Introduce un correo", "email")

    } else {
        localStorage.setItem("email", data.email)
    }
    console.log(data)
}
const h1Usuario = () => {
    let h1Usuarios = document.getElementById("h1Usuario")
    h1Usuarios.innerHTML += "Hola " + localStorage.getItem("nomUsuario") + " introduce tus datos"
    document.body.append(h1Usuarios)

    mostrarForm()
}

const mostrarForm = () => {
    let form2 = document.getElementById("form2")

    form2.style.display = "block"
    document.body.append(form2)
}

const changeLabel = (text, obj) => {
    let etiqueta = document.getElementById("etiquetaForm2")
    etiqueta.innerHTML += `${text}<br>`
    etiqueta.style.display = "block"
    etiqueta.style.color = "orange"
    document.getElementById(obj).style = "border: red solid 2px";
}

const checkDni = (dni) => {
   if( /^[0-9]{8}[a-z]{1}?$/i.test(dni)){
    return true
   }else{
    return false
   }
}





