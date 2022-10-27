window.onload = function (){
   cargarForm()
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
}
const crearH1 = (usuario) =>{
   
    let h1 = document.createElement("h1")

    h1.innerHTML += "Hola "+ usuario + " introduce tus datos"

    document.body.append(h1)
}

