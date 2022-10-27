window.onload = function (){
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
    return JSON.stringify(obj.userName)

}

let nomUsuario = recogerValores();
console.log(nomUsuario)