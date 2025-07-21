/* 
const coche ={
    marca: "toyota",
    modelo:"corolla",
    year: 2022,
    color: "gris",
    arrancar: function(){
        console.log("el coche esta arrancando")
    },
    acelerar: function(){
        console.log("el coche esta acelerando")
    },
    frenar: function(){
        console.log("el coche esta frenando")
    }
}



coche.arrancar()
 */

                    //FOREACH
/*  
Foreach(): ejecuta una funcion para cada elemento del array
*/


/* 

const frutas = ["manzana", "banana", "naranja"]

const numeros = [1,2,3,4,5,6,7,8,9,10]

numeros.forEach(function(x){ console.log(x*9)})
 */




//                                  MAP


/* 
map(): crea un nuevo array con el resultado de llamar a una funcion para cada elemento del array*/

/* const numeros = [1,2,3,4,5,6,7,8,9,10]

const doble= numeros.map(function(numero){ return numero*2})
const triple= numeros.map(function(numero){ return numero*3})
const cuadruple= numeros.map(function(numero){ return numero*4})

console.log(numeros)



const precios = [100,200,300,400,500]
const blackFreeday= precios.map(function(x){return x*0.8})

alert(blackFreeday)
 */
/* 

let producto = alert("que queres comprar?")
const carrito=[15000,5000,3000]
carrito.push(producto)

let precio final= lo que compro el suario


const provincia = carrito.map(   function()=> suma todo y metele 4 cuotas)
const galicia = carrito.map(   function()=> suma todo y metele 20% descuento)
const nacion = carrito.map(   function()=> suma todo y metele 15%)


function ticket (){
    alert(
        `el precio final es ${precioFinal}, pero con banco provincia tu precio final es ${provincia}`
    )
}

 */





                                        //  FIND

/* 
se utiliza para buscar un elemento en el array que cumpla con x condicion.
y devuelve el primero que la cumple*/




/* const numeros = [1,2,3,4,5,6,7,8,9,10]

const encontrado = numeros.find(  (numero)=>   numero >=15   )


if(encontrado){
    alert("hola don pepito")
} */


                                        //  FILTER
/* filter(): crean un nuevo array con todos los elementos que pasan un filtro */


/* const numeros = [1,2,3,4,5,6,7,8,9,10]


numerosPares= numeros.filter(   function(numero){
    return numero % 2 ===0
})
console.log(numerosPares) */


                        // REDUCE

/* 
se usa para reducir un array a un unico valor.
se utiliza para procesar cada elemento del array y convinarlos en un solo valor */

/* let envio = 10

const precioPrendas= [2698,2,3,4,5]            

const suma = precioPrendas.reduce((acc,val)=> acc + val) */


//          SORT



/* 
ordenar los numeros de forma ascendente.



*/


/* const numeros = [1,32,45,98,75,26,31,49]

numeros.sort(function(a,b){
    return a-b
}) */