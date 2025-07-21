//SISTEMA DE STOCK

/* 
informacion minima del producto -  objetos  *
modelo de datos - funcion constructora    *
contabilizar -array       *


------------------------------------------------------------------------------------------



funciones de producto{
    filtrarse    *
    agregar      *
    eliminar
}

*/






//informacion producto
let obj = {
    nombre:"producto",
    precio:123,
    stock:123
}

//modelo contructor producto
const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}


//stock inicial
let producto1 = new Producto("notebook lenovo",1200000,15)
let producto2 = new Producto("notebook samsung",1700000,5)
let producto3 = new Producto("notebook apple macbook",2000000,27)

let lista = [producto1,producto2,producto3]


function filtrarProductos(){
    let palabraClave= prompt("ingresa el producto que deseas buscar")
    let resultado = lista.filter((x)=>x.nombre.includes(palabraClave))

    if(resultado.length >0){
        console.table(resultado)
    }else{
        console.log("no se encontro coincidencia")
    }
}



function agregarProducto(){
    let nombre = prompt("ingresa el nombre del nuevo producto")
            if(!nombre){
                alert("el nombre no puede estar vacio");
                return;
            }
//verifico si el producto ya existe

            let existe = lista.find(  (x)=>x.nombre.toLowerCase() === nombre.toLowerCase()  )

                    if(existe){
                        alert("ya existe un producto con ese nombre")
                        return
                    }

//pido el precio del nuevo producto
    let precio = parseFloat(prompt("ingresa el precio del nuevo producto"))

                    if(isNaN(precio) || precio<0 ){
                        alert("el precio ingresado no es valido")
                        return;
                    }

//pido el stock del nuevo producto

    let stock = parseInt(prompt("ingresa el stock del producto nuevo"))

if (isNaN(stock) || stock < 0) {
    alert("Stock inválido.");
    return;
}


let nuevoProducto = new Producto(nombre,precio,stock)
lista.push(nuevoProducto)
console.table(lista)
}
