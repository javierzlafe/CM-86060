

/* function leerArchivo(){
    return new Promise(resolve =>{
        setTimeout( ()=>{
            resolve(`contenido del archivo`)
        },8000)
    })
}


 async function procesoAsincronico(){
    console.log('iniciando lectura del archivo...')

    let contenido = await leerArchivo()
    console.log(contenido)
}

procesoAsincronico() */





/* 
    creamos una funcion para leer un archivo
    retornar una promesa(resolve, reject)
    usar setTime out para simular la espera

    armar una funcion asincronica para llamar a la lectura del archivo
    try para mostrar si todo esta ok
    catch para mostrar que se rompio algo
    */





//ahora con el dom

//simular lectura de un perfil de un usuario desde un archivo


/* 
cargar un perfil*
retornar promesa con datos *
simular respuesta true o false del servidor*
simular proceso de espera con los datos*

funcion asincronica que consuma los datos
controlar error por si la respuesta es falsa
mostrar los datos en el dom*
*/



function cargarPerfilUsuario(){
    return new Promise(  (resolve,reject)=>{
        mostrarMensaje('iniciando la carga de un nuevo perfil...')

        setTimeout( ()=>{
            const exito=  Math.random() > 0.2 //80% de chance que sea true
            if(exito){
                //Datos simulados
                const perfil = {
                    nombre:"juan perez",
                    edad:28,
                    deporteFavorito: "taekwondo",
                    nivel:"intermedio"
                }
                resolve(perfil)
            }else{
                reject("error: no se pudo cargar el perfil")
            }
        },4000)
    })
}

//-----------------------------------------------------------------------

//funcion asincronica que maneja la carga de los datos y actualiza el dom

async function mostrarPerfil(){

    try {
        const perfil= await  cargarPerfilUsuario()

        mostrarMensaje("perfil del usuario")
        mostrarMensaje(`nombre: ${perfil.nombre}`)
        mostrarMensaje(`edad: ${perfil.edad}`)
        mostrarMensaje(`deporte : ${perfil.deporteFavorito}`)
        mostrarMensaje(`nivel: ${perfil.nivel}`)
    }catch(error){
        mostrarMensaje(error)
    }
}
//------------------------------------------------------------------------

function mostrarMensaje(texto){
const div = document.getElementById("ouput")
const p = document.createElement("p")
p.textContent = texto
div.appendChild(p)
}


mostrarPerfil()