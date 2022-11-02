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

            recogerValores(data)
        })
}

const recogerValores = (data) => {
    
    if (data.dni.includes(["A-Z"])== false || data.dni.length() != 9) {
        changeLabel("Introduce un DNI válido")
    }
    if(!isNaN(data.codPostal)){
        changeLabel("Introduce un código postal válido")
    }
    if(isNaN(data.numTlf)|| data.numTlf.length != 9){
        changeLabel("Introduce un número de telefono válido")
    }

}

const changeLabel = (text) =>{
    let etiqueta = document.getElementById("etiquetaForm2")
    etiqueta.innerHTML += `${text}<br>`
    etiqueta.style.display = "block"
    etiqueta.style.color = "red"
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