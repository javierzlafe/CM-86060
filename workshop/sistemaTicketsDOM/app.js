// Variables globales
let tickets = [];
let ultimoId = 1;

// Función para mostrar el formulario de crear
function mostrarFormulario() {
  document.getElementById("formularioCrear").style.display = "block";
  document.getElementById("seccionFiltro").style.display = "none";
  /* La siguiente Esta línea limpia el contenido del div listaTickets
   y lo restaura al mensaje inicial cada vez que el usuario hace click
  en "Crear Ticket", resolviendo así el problema de que los tickets
  siguieran apareciendo después de navegar por otras secciones. */
  document.getElementById("listaTickets").innerHTML = "";
}

// Función para mostrar todos los tickets
function mostrarTodos() {
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "none";
  mostrarTickets(tickets);
}

// Función para mostrar la sección de filtro
function mostrarFiltro() {
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "block";
}

/* |||||||||||||||||||||||||||||||||| * |||||||||||||||||||||||||||||||||||||||| */

// Función para crear ticket
function crearTicket() {
  const cliente = document.getElementById("cliente").value.trim();
  const problema = document.getElementById("problema").value.trim();

  const ticket = {
    id: ultimoId++,
    cliente: cliente,
    problema: problema,
    estado: "abierto",
  };

  tickets.push(ticket);
  alert("✅ Ticket creado con éxito");

  // Limpiar formulario
  document.getElementById("ticketForm").reset();
}

// Función para mostrar tickets
function mostrarTickets(lista) {
  const listaTickets = document.getElementById("listaTickets");

  if (lista.length === 0) {
    listaTickets.innerHTML = "<p>No hay tickets para mostrar.</p>";
    return;
  }

  let listaHtml = "<h3>Lista de Tickets:</h3>";

  lista.forEach((ticket) => {
    listaHtml += `
                    <div>
                        <p><strong>ID:</strong> ${ticket.id}</p>
                        <p><strong>Cliente:</strong> ${ticket.cliente}</p>
                        <p><strong>Problema:</strong> ${ticket.problema}</p>
                        <p><strong>Estado:</strong> ${ticket.estado}</p>
                        ${
                          ticket.estado === "abierto"
                            ? `<button class="btnCerrar" data-id="${ticket.id}">Cerrar Ticket</button>`
                            : ""
                        }
                        <hr>
                    </div>
                `;
  });

  listaTickets.innerHTML = listaHtml;

  // Agregar event listeners a los botones de cerrar
  const botonesCerrar = document.querySelectorAll(".btnCerrar");
  botonesCerrar.forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-id"));
      cerrarTicket(id);
    });
  });
}

// Función para aplicar filtro por estado
function aplicarFiltro() {
  const estado = document.getElementById("filtroEstado").value;
  const ticketsFiltrados = tickets.filter((ticket) => ticket.estado === estado);
  mostrarTickets(ticketsFiltrados);
}

// Función para cerrar un ticket
function cerrarTicket(id) {
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) {
    alert("❌ Ticket no encontrado");
    return;
  }

  if (ticket.estado === "cerrado") {
    alert("El ticket ya está cerrado");
    return;
  }

  const confirmar = confirm("¿Desea cerrar el ticket?");

  if (confirmar) {
    ticket.estado = "cerrado";
    alert("✅ Ticket cerrado con éxito");
    mostrarTodos(); // Refrescar la vista
  }
}

/* ||||||||||||||||||||||||||||||||||||| * |||||||||||||||||||||||||||||||||||||| */

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar - ocultar secciones al cargar
  document.getElementById("formularioCrear").style.display = "none";
  document.getElementById("seccionFiltro").style.display = "none";

  // Event listeners para mostrar botones principales
  document
    .getElementById("btnCrear")
    .addEventListener("click", mostrarFormulario);
  document
    .getElementById("btnVerTodos")
    .addEventListener("click", mostrarTodos);
  document
    .getElementById("btnFiltrar")
    .addEventListener("click", mostrarFiltro);

  // Event listener para aplicar filtro
  document
    .getElementById("btnAplicarFiltro")
    .addEventListener("click", aplicarFiltro);

  // Event listener para el formulario
  document
    .getElementById("ticketForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      crearTicket();
    });
});
