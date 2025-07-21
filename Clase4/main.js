/*

Crear un contador que cuente del 1 al 10
que lo muestre por consola
usando algun ciclo

*/


/* for (let i = 1; i<=10; i++){
    console.log(i)
}


let numero = 1
while(numero <=10){
    console(numero)
    numero++
} */

//Muestren los numeros pares que hay del 2 al 20, usando un bucle


/* for(let i=2; i<=20; i++){
    if(i % 2 ===0){
        console.log(i)
    }
} */

/* for(let i =2; i<=20; i+=2){

    console.log(i)
}
 */


/* 
ejercicio dinamico, pidiendo datos por teclado al usuario
declaremos una variable con una edad, y usamos condicionales para mostrar si la persona
es "menor de edad", "adulto joven"o "adulto" */



/* 
pedir al usuario que ingrese una palabra*
contar cuantas vocales tiene esa palabra
considerando que sean mayusculas o minusculas
 */




/* 
let palabra = prompt("ingresa una palabra").toLowerCase()
let vocales=0
for(let i =0; i < palabra.length; i++){
    let letra = palabra[i]
    if(letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u"){
        vocales++
    }
}
 console.log("la palabra que ingresaste tiene " + vocales + "vocales")

 */

function saludar(){
  let nombre = prompt("ingresa un nombre")
  alert("bienvenido/a " + nombre)
}





function buscarVocales(){
    let palabra = prompt("ingresa una palabra").toLowerCase()
let vocales=0
for(let i =0; i < palabra.length; i++){
    let letra = palabra[i]
    if(letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u"){
        vocales++
    }
}
 console.log("la palabra que ingresaste tiene " + vocales + "vocales")
}

buscarVocales()
buscarVocales()
buscarVocales()