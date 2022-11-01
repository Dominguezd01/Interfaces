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
    crearH1()
    let form2 = document.getElementById("divForm2")
    form2.style.display = "block"
  
}
const crearH1 = () =>{
   
    let h1 = document.createElement("h1")
   
    h1.innerHTML += "Hola "+  localStorage.getItem("nomUsuario") + " introduce tus datos"

    document.body.append(h1)
}

