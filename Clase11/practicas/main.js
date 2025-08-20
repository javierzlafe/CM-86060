//estrutura del fetch

/* 
fetch( "https://api.deejemplo-com/data")
.then(response => response.json()) //se convierte la respuesta a formato JSON usando response.json()
.then( data=>{
    console.log(data) //aca puedo trabajar con los datos recibidos
})
.catch(error =>{
    console.error("exploto todo")
})
 */



/* let URL= "https://pokeapi.co/api/v2/pokemon?limit=35" //la base de la api
const pokemonContainer= document.getElementById("pokemon-container")



fetch(URL) //realizar una solicitud http para consumir los pokemon
.then(response=> response.json()) //convierte la respuesta de la api, a formato json
.then(data=>{ //manejamos el objeto en json (que vino desde la api)
    const pokemons = data.results; //extrae el arreglo(array)

    pokemons.forEach(  (pokemon)=>{ //recorrer cada pokemon de la lista
        fetch(pokemon.url) //hace una solicitud http para obtener informacion detallada de ese pokemon
        .then(response=> response.json()) //convierte la respuesta de la api, a formato json
        .then( pokemonData =>{ //manejar los datos del pokemon
            const pokemonElement = document.createElement("div") //creo un nuevo elemto para mostrar el pokemon
            pokemonElement.innerHTML= `
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}"> 

            `
            pokemonContainer.appendChild(pokemonElement)

        }).catch(error=>{
            console.error("ha ocurrido un error al obtener la lista de pokemon",error)
        })
    } ).catch(error=>{
        console.error("ha ocurrido un error al obtener la lista de pokemon",error)
    })
} ) */



/* 
fetch("productos.json")
.then(response=>response.json())
.then( data=>{
    const frutas= data.frutas

    const frutascontainer= document.getElementById("frutas-container")

    frutas.foreach( fruta=>{
        const frutaElement= document.createElement("p")
        frutaElement.textContent = `Nombre: ${fruta.nombre}, Color: ${fruta.color}, Sabor: ${fruta.sabor}`
        frutascontainer.appendChild(frutaElement);
    }   )
}).catch(error=>{
    console.error("ha ocurrido un error")
})
 */

 

