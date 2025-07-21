/* 
vamos a crear una funcion que pida el nombre al usuario, 
muestre por pantalla 
*/ 
/* function pedirNombre() {
    let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola, " + nombre + "!");
}
 */

/* function identificar () {
    let nombre = prompt ("Ingresa tu nombre")
    console.log ("Bienvenido " + nombre)
    return
} */
/* function leerNombre(){
    let nombre = prompt("Ingrese su nombre por favor");
    alert("Bienvenido " + nombre);}
 */


    /* vamos a crear una funcion que pida el nombre por parametro, 
muestre por pantalla  */



/* function mostrarNombre(nombre) {
    console.log("Hola, " + nombre + "!");
}
mostrarNombre("Marta"); */


/* 
creo una funcion que pida elusuario por teclado
valido si es diferente a vacio, le saco los los espacios laterales
si el dato es diferente a vacio, dy bienvenida por alert
si no cumple la condicion, aviso que el el dato es incorrecto
*/

/* 
function pedirNombre() {
    let nombre = prompt("Ingresa tu nombre:").trim()

    if (nombre !== "") {
      alert("¡Bienvenido/a, " + nombre + "!");
    } else {
      alert("El dato ingresado es incorrecto.");
    }
  }
 */


/*   let mensaje = prompt("Ingrese su mensaje").trim();

  mensajeUsuario(mensaje);
function mensajeUsuario(texto) {
  if (texto !== "") {
    alert(texto);
  } else {
    alert("No puede ingresar mensajes vacíos");
  }
} */




/* function pedirUsuario() {
    let usuario = prompt("Ingrese el nombre de usuario:");
    if (usuario !== null) {
      usuario = usuario.trim();
      if (usuario !== "") {
        alert("¡Bienvenido, " + usuario + "!");
      } else {
        console.error("El dato es incorrecto");
      }
    }
  }
 */


/* let precio = prompt("Ingrese el valor del preducto para calcular el precio");
calcularPrecio(precio);
function calcularPrecio(precio) {
  let nuevoPrecio = calcularIva(precio);
  alert("El nuevo precio es " + nuevoPrecio);
}
function calcularIva(precio) {
  const iva = 1.21;
  let calculoConIva = precio * iva;
  return calculoConIva;
}
 */


/* function calcularPrecioFinal(precio) {
    const IVA = 0.22; // 22% de IVA
    return precio + (precio * IVA);
  }
  function solicitarPrecio() {
    let precioIngresado = parseFloat(prompt("Ingrese el precio del producto:")) 
    
    if (precioIngresado !== null ||) {
     
      if ((precioIngresado) && precioIngresado > 0) {
        const precioFinal = calcularPrecioFinal(precioIngresado);
        alert("El precio final con IVA es: $" + precioFinal(2));
      } else {
        alert("El valor ingresado no es válido.");
      }
    } else {
      alert("No se ingresó ningún valor.");
    }
  }
 */


    


  /* 
  Vladimir es un usuario que necesita solucionar el calculo de un precio final.

  el desarrollador debe crear una funcion para calcular el precio final,
  agregando el iva en cuestion, dicho precio debe ser reasignado como parametro
  desde otra funcion donde se pide el precio a calcular. Es necesario mantener la interaccion 
  mediante el uso de funciones nativas para pedir y mostrar estos datos
  */



  const iva = 1.21
  function calcularIva(importe){
    if(parseFloat(importe)){
        let resultado = importe *iva
        alert(`el importe mas iva es: ${resultado}`)
    }
  }
  function calcularPrecioFinal(){
    let precioDelProducto= prompt("ingresa el importe del producto")
    calcularIva(precioDelProducto)
  }