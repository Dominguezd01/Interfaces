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
    recogerValores(JSON.stringify(data))
  })
}
/*
  Comprueba si los valores no estan vacios
*/

const recogerValores = (data) =>{
    let obj = JSON.parse(data)
    localStorage.setItem("nomUsuario", obj.userName)
    if(localStorage.getItem("nomUsuario")!=""&& obj.pass != ""){
      window.location.href = "./form2.html"
    }else{
      let label = document.getElementById("etiqueta")
      label.style.color = "red"
      label.style.display ="block"
    }
}


