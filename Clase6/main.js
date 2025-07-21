 
 
 
/*  let array= [1,"dos",true] */

//const frutas = ["manzana", "pera", "banana","sandia"]

//indice          0          1         2        3



//console.log(frutas[0]) //me arroja el elemento del indice 0

//console.log(frutas[2]) //me arroja el elemento del indice 2



//let frutaPreferida = frutas[1]

/* const numeros = [10,20,30,40,50]
const numeros2 = [60,70,80,90,100]


console.log(numeros[2] + numeros2[4])
                30     +       100 */


               /*  const numeros = ["manzana", "pera", "banana","sandia","kiwi"]    
                //indices         0  1  2  3  4  


                for(let i=2;i<=4;i++){
                    console.log(numeros[i])
                } */



/* 

                const frutas = ["manzana", "pera", "banana","sandia","kiwi"]

                console.log(frutas.length)



                for(let i =0 ;i<=frutas.length;i++){


                
                } */





                /* PUSH */


        /* push(): agregar un elemento al final del array */



        //const frutas = ["manzana", "pera", "banana","sandia","kiwi"]
/* 
        frutas.push("naranja")
        console.log(frutas)
 */

        /* POP */
        /* pop(): elimina el ultimo elemento del array */

        /* frutas.pop()

        console.log(frutas)
         */


        /* SHIFT */

        /* shift():eliminar el primer elemento del array */

/* 
        frutas.shift()

        console.log(frutas)
 */
        /* UNSHIFT: */
        /* unshift():agrega un elemento al principio del array */



 /*   frutas.unshift("melon")

        console.log(frutas)
 */

        //const frutas = ["manzana", "pera", "banana","sandia","kiwi"]


        /* slice(): retorna una copia de una parte del array, (no incluye la ultima posicion) */

     /*    const copia = frutas.splice(0,2)
        console.log(copia)
 */

        /* splice():cambia o elimina el contenido */


        /* concat(): une dos o mas array*/



       /*  const perros = ["puqui","oreja","mili","tini"]
        const gatos = ["salem",123,"mishi"]

        const mascotas= [gatos.concat(perros)] */

     


        /* join():une todos elementos de un array en forma de string */

   //console.log(perros.join("/"))


                                   //OBJETOS




/* nombre{
       clave: valor
}
 */


/* let persona ={
       nombre:"fernando",
       ciudad:"cordoba",
       edad:20,
       computadora:{
              tipo: "desktop",
              marca:false,

       }
}
let persona2 ={
       nombre:"lautaro",
       ciudad:"bs as",
       edad:22
}
let persona3 ={
       nombre:"cielo",
       ciudad:"mendoza",
       edad:28,
       computadora:{
              tipo: "laptop",
              marca:"asus",

       }
} */




/* const empleado1={
nombre:"javier",
cargo:"profe",
comisiones: [123,456,789,963,852,741],
edad:20,

} */


/* alert(`nombre: ${empleado1.nombre}, cargo: ${empleado1.cargo}`)
 */






/* const empleado3 = empleado1


empleado3.nombre = "nico"
alert(empleado1.nombre)
 */



/* let alumnos=[
{nombre:"marta",
curso:"javascript",
edad:20,
ciudad:"madrid"},
{nombre:"eloisa",
curso:"javascript",
edad:22,
ciudad:"cancun"},
{nombre:"lautaro",
edad:25,
ciudad:"nogues",
cursos:{
       curso1:{
              nombre:"javascript",
              meses: [1,2,3,4,5,6,]

       },
       curso2:"react"
}}
] */
 //console.log(alumnos.length) //3

/* 

for(let i =0;i < alumnos.length;i++){
console.log(alumnos[i])

}
 */


/* console.log(alumnos[2].cursos.curso1.meses[1]) */




let productos=[

{producto:"arroz",
precio:125},
{producto:"pan",
precio:135},
{producto:"leche",
precio:145},
{producto:"fideos",
precio:155},


]


for(let i=0;i<productos.length;i++){
       let blackFriday = productos[i].precio*0.9

       console.log(blackFriday)
}