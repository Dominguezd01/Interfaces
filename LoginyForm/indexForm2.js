window.onload = function(){
    h1Usuario()
}
const h1Usuario = () =>{
    let h1Usuarios = document.getElementById("h1Usuario")
    h1Usuarios.innerHTML += "Hola "+  localStorage.getItem("nomUsuario") + " introduce tus datos"
    document.body.append(h1Usuarios)

    mostrarForm()
}

const mostrarForm = () =>{
    let form2 = document.getElementById("form2")

    form2.style.display =" block"
    document.body.append(form2)
}