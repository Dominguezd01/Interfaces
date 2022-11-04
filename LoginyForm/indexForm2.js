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
        changeLabel("Introduce un nombre")

    } else {
        localStorage.setItem("nombre", data.nombre)
    }
    if (data.apellidos == "") {
        changeLabel("Introduce unos apellidos")

    } else {
        localStorage.setItem("apellido", data.apellidos)
    }
    if (data.fechaNac == "" || new Date(data.fechaNac) > new Date()) {
        changeLabel("Introduce una fecha de nacimiento válida")

    } else {
        localStorage.setItem("fechaNac", data.fechaNac)
    }
    if (data.dni.match(/[A-Z]/) == false || data.dni.length != 9) {
        changeLabel("Introduce un DNI válido")

    } else {
        localStorage.setItem("dni", data.dni)
    }

    if (data.calle == "") {
        changeLabel("Introduce la calle")

    } else {
        localStorage.setItem("calle", data.calle)
    }
    if (data.numero == "" || isNaN(data.numero)) {
        changeLabel("Introduce un número válido en el apartado <i>Dirección</i>")

    } else {
        localStorage.setItem("numero", data.numero)
    }
    if (data.ciudad == "") {
        changeLabel("Introduce una ciudad")

    } else {
        localStorage.setItem("ciudad", data.ciudad)
    }
    if (isNaN(data.codPostal) || data.codPostal == "") {
        changeLabel("Introduce un código postal válido")

    } else {
        localStorage.setItem("codPostal", data.codPostal)
    }
    if (data.provincia == "") {
        changeLabel("Introduce una provincia")

    } else {
        localStorage.setItem("provicia", data.provincia)
    }
    if (Number.isInteger(data.NumTlf) || data.numTlf.length != 9) {
        changeLabel("Introduce un número de telefono válido")

    } else {
        localStorage.setItem("numTlf", data.numTlf)
    }
    if (data.email == "") {
        changeLabel("Introduce un correo")

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

const changeLabel = (text) => {
    let etiqueta = document.getElementById("etiquetaForm2")
    etiqueta.innerHTML += `${text}<br>`
    etiqueta.style.display = "block"
    etiqueta.style.color = "orange"
}





