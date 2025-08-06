

//SET TIME OUT (establecer el tiempo de espera)


//setTimeout(funcion,tiempo)


/* let time = new Date()

function saludar(){
    console.log(time)
}

 */


/* 

const interval = setInterval( ()=>{
    const date = new Date()
    console.log(date.toLocaleTimeString())
},1000   )


setTimeout( ()=>{
clearInterval(interval)
}, 5000)
 */


/* 
const promesa = new Promise(  (resolve,reject)=>{
    //hacer algo asincronico, como una solicitud http
    //si esta todo ok, llamo a resolve con el resultado
    //si falla algo, llamo a reject con el error
})


promesa.then(  resultado=>{
    //aca manejo el resultado si la promesa se cumple
}).catch( error=>{
    //manejo el error
})



const eventoFuturo= (x)=>{
    return new Promise( (resolve,reject)=>{
        if(x===true){
            resolve("promesa resuleta")
        }else{
            reject("promesa rechazada")
        }
    } )
}

console.log( eventoFuturo(false)  )

console.error("esto es un error desde consola") */


function procesarmensaje(){
    console.log("hola desde consola")
}


function HolaMundo(){
    const mensaje= "hola mundo"

    try{
        procesarmensaje()
    }catch{
        console.log(error)
    }finally{
        console.error("saliendo del ry y catch")
    }
}