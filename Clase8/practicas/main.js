//PASO A PASO PARA ARMAR UN GESTOR DE TICKET

// 1. Crear una array vacio donde vamos a aguardar todos los ticket que se creen*
//  cada ticket va a ser un objeto con 4 propiedades: id, cliente, problema, estado

// 2. Necesitamos una variable para asignar un id a cada ticket *

// 3. Crear un menu que muestre opciones usando prompt. *
// Las opciones serian: crear ticket, ver todos los ticket, filtrar, marcar como resueltos (cerrar),salir.

// 4.crear un bucle para que repita, hasta que el suario decida salir *

// 5. funcion para crear ticket. *
      /* 
      pedir los datos al usuario*
      crear un objeto con esos datos y declarar el estado como "abierto" *
      agergar ese objeto al array*
      mostrar que se agrego correctamente*
      */

// 6. Funcion para mostrar ticket*
      /* 
      recorrer el array*
      armar un foreach*
      mostrar el resultado*
       */
      
// 7. Filtrar por estado ("abierto"/"cerrado")*
      /* 
      pedir al usuario que estado quiere ver*
      filtrar el array con ese estado*
      mostrar solo los ticket con el estado que paso el usuario*
       */


    




// 8. funcion para cerrar ticket.
      /* 
      pedir el id que queres cerrar
      buscarlo el id, con find
      si existe y esta abierto, pedir confirmacion para cerrarlo
      si acepta, cambiamos el estado a cerrado.
       */





      //creamos el array vacio
      let tickets= []
      //variables para id de ticket
      let ultimoId = 1;

      //funcion para mostrar menu

      function mostrarMenu(){

        return prompt(
          "Gestor de ticket \n\n" + 
          "1. crear ticket \n"+
          "2. ver todos los ticket \n"+
          "3. filtrar por estado \n"+
          "4. cerrar ticket \n"+
          "5. salir"
        )
      }

      let salir= false

      while(!salir){
        let opcion = mostrarMenu()

        switch(opcion){
          case "1":
            crearTicket();
            break;
          case "2":
            mostrarTickets(tickets);
            break;
          case "3":
            filtrarPorEstado();
            break;
          case "4":
            cerrarTicket();
            break;
          case "5":
            salir= confirm("estas seguro que queres salir?")
            break;
            default:
              alert("opcion invalida, intenta de nuevo")
        }
      }


      //funcion para crear ticket nuevo

      function crearTicket(){
        const nombre = prompt("nombre del cliente:")
        const descripcion = prompt("Descripcion del problema")

        const ticket={
          id: ultimoId++,
          cliente: nombre,
          problema: descripcion,
          estado: "abierto",
        }

        tickets.push(ticket)
        alert("✅ ticket creado con exito")

      }


      //funcion para mostrar todos los ticket

      function mostrarTickets(lista){
        if(lista.length ===0){
          alert("no hay ticket registrados")
          return;
        }

        let mensaje = "lista de Ticket: \n\n"
        lista.forEach( (t)=>{ 
          mensaje += `ID: ${ t.id} - Cliente: ${t.cliente} - Estado: ${t.estado}` 
        })
        alert(mensaje)

      }



      //funcion para filtrar por estado

      function  filtrarPorEstado(){
        const estado = prompt("que estado queres ver? (abierto/cerrado)")

        if (estado !== "abierto" && estado !== "cerrado"){
          alert("estado invalido")
          return
        }
        const filtrados= tickets.filter(  (t)=> t.estado === estado );
        mostrarTickets(filtrados)
      }




      function cerrarTicket(){
        const id = parseInt(prompt("ingresa el id del tiket a cerrar")) 
        const ticket = tickets.find( (t)=> t.id === id )
        
        if(!ticket){
          alert("✖️ ticket no encontrado")
          return;
        }
        
        if(ticket.estado === "cerrado"){
          alert("el ticket ya esta cerrado")
          return;
        }

        const confirmar= confirm("desea cerrar el ticket?")
        if(confirmar){
          ticket.estado ="cerrado"
          alert("ticket cerrado con exito")
        }
      }