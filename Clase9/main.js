

 /* 
  getElementbyId: busca un elemento en la pagina web por su id y lo devuelve
  getElementByClassName: busca un elemento por su clase y lo devuelve
  getElementByTagName: busca todos los elementos que tengan ese tag y devuelve una LISTA
 */


//forma de llamar

/* let titulo = document.getElementById("titulo")

titulo.innerHTML= `Bienvenidos a la clase del pela`

console.log(titulo)
 */





/* let pochoclo = document.getElementById("padre")

    let productos = [1,2,3,321,65,987,98,654,321,6,541687,746,54,321,354,984,654,3213,21,684,654,3213,521,654,64,321,321,654,65,321,321]


for (const i of productos){


    let lista = document.createElement("li")
    lista.innerHTML = i
    pochoclo.appendChild(lista)

} */






let titulo = document.getElementById("titulo")



//ELEMENTO.ADDEVENTLISTENER(EVENTO,FUNCION)





/* function saludar(){
    let nombre =prompt("ingresa tu nombre")
    alert("bienvenido al sistema " + nombre)
}
 */

titulo.addEventListener("click", ()=>console.log("hola desde un evento"))

