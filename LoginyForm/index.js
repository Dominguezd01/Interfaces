window.onload = function (){
   cargarForm()
   getEl
}

const cargarForm = () =>{
  document.querySelector("form")
  .addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.target)

    )
    console.log(data)
    recogerValores(JSON.stringify(data))
  })
}

const recogerValores = (data) =>{
    let obj = JSON.parse(data)
    console.log(obj)
    localStorage.setItem("nomUsuario", obj.userName)
    let form = document.getElementById("form")
    form.style.display = "none"
    let h1Usuarios = document.getElementById("h1Usuario")
    h1Usuarios.innerHTML += "Hola "+  localStorage.getItem("nomUsuario") + " introduce tus datos"
    let form2 = document.getElementById("divForm2")
    form2.style.display = "inline"
  
}


