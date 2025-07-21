//condicion, accion si es true, accion si es false

/* 
 if(condicion){
    acciones si true
}
*/


/* let num1 =10
let num2 = 15


if( num1 > num2  ){
    alert("num1 es mayor a num2")
}else{
    alert("la condicion es falsa")
} */

/* let nombre = prompt("ingresa tu nombre")

if (nombre === "marta"){
    alert("si, es marta, porque toma te de matcha")
}else if(nombre === "cielo") {
    alert("claramente no es marta, cielo toma cafe")
}else{
    alert("no es ni marta ni cielo, al final")
} */




/* let nombre = prompt("ingresa tu nombre")

if(nombre === "mario"){
    alert("Bienvenido mario, buen dia")
} */


/* = asignacion
== comparacion
=== comparacion estricta */


/* let numero1 = prompt("ingresa un numero")

if(numero1 === Number){
    alert("todo ok")
}
 */



/* let palabra = prompt("ingresa lo que buscas")

if(palabra.toUpperCase() === "AIRE ACONDICIONADO"){
    alert("si, tenemos")
}else{
    alert("no, no tenemos")
}

 */



//ciclos

//estructura del for

/* 

desde, hasta, actualizacion

for(inicio,limiteo condicion, incremento)

*/


/* for(let i =0; i<5;i++){
    console.log( "estoy iterando" + i)
}
 */


/* let iterar = true */


/* 
while(iterar=== true/false){
    codigo a ejecutar
}
*/

/* while(iterar === true){
    console.log("imprimo el mensaje y explota todo")
   iterar = confirm("desea continuar?")
}
 */


/* do while */

/* 
let numero =8

do{
    console.log("esto se ejecuta al menos una vez")
}while(numero <5)

nico === cielo */


let intentos =1
let identificar = true

do{
    let usuario = prompt(" ingresa tu usuario(solo 3 intentos)")
    if (usuario === ""){ //si el usuario es nulo rompe el sistema y lo saca
        break //te saca del sistema
    }

    if(usuario === "javier gimenez" && intentos <=3){
        alert("bienvenido javier")
        identificar= false //si ya se logueo, dejo de identificar

    }else{
        alert("no se reconoce el usuario, te quedan "+intentos)
        intentos++ //sumo un intento
        if(intentos>3){
            alert("superaste los intentos")
            break //lo saco del sistema
        }
    }

}while(identificar)