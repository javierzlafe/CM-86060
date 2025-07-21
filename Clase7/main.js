
/* 

function Producto(id,nombre,importe,stock){
    this.id = id
    this.nombre = nombre
    this.importe = importe
    this.stock = stock
}


 let producto1= new Producto(1,"teclado", 25000,4)
 let producto2= new Producto(2,"mouse",15000,10)
 let producto3 = new Producto(3,"monitor", 400000,5)

console.log(producto1.id)
 */


/* 
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
    this.saludar = function(){
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}



let persona1 = new Persona("nico",25)
let persona2 = new Persona("cielo",28)
let persona3 = new Persona("fer",30)


persona1.saludar()
persona2.saludar()
persona3.saludar()



 */




/* 
const Producto=function(nombre,precio,stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}

let producto1= new Producto("notebook lenovo",1200000,15)
let producto2= new Producto("notebook samsung",1500000,10)
let producto3= new Producto("notebook apple macbook",20000000,5)

let lista=[producto1,producto2,producto3]


function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que buscas")
    let resultado = lista.filter((x)=>x.nombre.includes(palabraClave))

    if(resultado.length >0){
        console.table(resultado)
    }else{
        console.log("no se encontro nada")
    }
}


 */


//Hay 4 metodos para el uso de storage

/* 
SetItem() permite crear una clave y asignarle un valor
GetItem() permite recuperar o trae una clave desde el storage
removeItem() elimina un dato
clear() limpia todo
*/


localStorage.setItem("nombre","fernando")
localStorage.setItem("apellido","moyano")
localStorage.setItem("edad","30")

console.log(localStorage.getItem("nombre"))



for(let i=0;i <localStorage.length;i++){
    let clave = localStorage.key(i);
    console.log("clave es "+clave)
    console.log("valor: "+localStorage.getItem(clave))
}



