/* 
and && 
or  || 
not ! 
*/

/* let numA = parseInt(prompt("ingresa el numero A")) 
let numB = parseInt(prompt("ingresa el numero B")) 


if(numA <= numB || numB <= numA){
    console.log("blablabla")
}else{
    console.warn("alerta, no se puede sumar una palabra con un numero")
}
 */

/* crear un sistema que deje ingresar un usuario, 
le de la bienvenida a ese usuario por pantalla,
y en el caso de dejar vacio el usuario, 
avisar el error por consola y sacarlo del sistema */



/* let usuario = prompt ("ingresa tu usuario")

if(usuario){
    alert("bienvenido/a " + usuario)
}else{
    console.warn("ingresa algo por favor")
} */
/* 
let num1= parseInt(prompt("ingresa el primer numero"))
let num2= parseInt(prompt("ingresa el segundo numero"))
let operacion= prompt("ingresa la operacion")
let resultado =758


if(operacion === "+"){
    resultado= num1+num2
}else if(operacion === "-"){
    resultado= num1-num2
}
else if(operacion === "*"){
    resultado= num1*num2
}
else if(operacion === "/"){
    resultado= num1/num2
}

alert("el resultado es: "+ resultado) */


//Switch



/* alert("bienvenidos a la consecionaria del pela")

let consulta = confirm("te ayudo a buscar un coche?")

if(consulta === true){
    let coche = prompt("que coche estas buscando? ingresa la marca")
    let color = prompt("elegi el color de tu "+coche).toLowerCase().trim()


    switch(color.toLowerCase()){   //la switch key
    case "blanco":
        alert("tenemos tu "+ coche + "en color " + color)
        break; // si no se elije el blanco, salta al siguiente caso
    case "negro":
        alert("tenemos tu "+ coche + "en color " + color)
        break;
    case "rojo":
        alert("tenemos tu "+ coche + "en color " + color)
        break;
    case "azul":
        alert("tenemos tu "+ coche + "en color " + color)
        break;
    case "verde":
        alert("tenemos tu "+ coche + "en color " + color)
        break;
    default: //si no ocurre ninguna de las anteriores
        alert("no tenemos " + coche + " en color " + color)
    }
}
  


trim ()
toLowerCase () */





alert("Bienvenidos a la concesionaria del Pela");
let consulta = confirm("¿Te ayudo a buscar un coche?");

if(consulta === true){
    let coche = prompt("¿Qué coche estás buscando? Ingresa la marca");
    let color = prompt("Elegí el color de tu " + coche).toLowerCase().trim();
     switch(color.toLowerCase().trim()){
    case "blanco":
        alert("tenemos tu "+ coche + "en color " + color)
        break; // si no se elije el blanco, salta al siguiente caso
    case "negro":
        alert("tenemos tu "+ coche + "en color " + color)
        break;
    case "rojo":
        alert("tenemos tu "+ coche + "en color " + color)
        break;
    case "azul":
        alert("tenemos tu "+ coche + "en color " + color)
        break;
    case "verde":
        alert("tenemos tu "+ coche + "en color " + color);
        break;
        
    default:
        alert("No tenemos " + coche + " en color " + color);
}
let confirmacionPedido = confirm("Tu elección es un " + coche + " en color " + color + ", correcto?");
if(confirmacionPedido === true){
    alert("Gracias por tu compra, en breve se contactará contigo un vendedor");
} else {
    alert("No hay problema, si cambias de opinión volve cuando quieras");
}
}