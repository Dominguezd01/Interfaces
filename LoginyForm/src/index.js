window.onload = function (){
   cargarForm()
}

const cargarForm = () =>{
  document.getElementById("form")
  .addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.target)
    )
    recogerValores(data)
  })
}
/*
  Comprueba si los valores no estan vacios
*/

const recogerValores = (data) =>{
    localStorage.setItem("nomUsuario", data.userName)
    if(localStorage.getItem("nomUsuario")!="" && data.pass != ""){
      location.href = "./form2.html"
    }else{
      document.getElementById("name").style = "border: red solid 2px";
      document.getElementById("pas").style = "border: red solid 2px";
    }
}


