const boton = document.getElementById("boton");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");
const nombre = document.getElementById("text");
const fecha = document.getElementById("fecha");
const prioridadAlta = document.getElementById("prioridad");
const prioridadMedia = document.getElementById("prioridad2");
const prioridadBaja = document.getElementById("prioridad3");

function crearTarea(texto) {
  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);
}

function agregarTarea() {
  const titulo = nombre.value;
  const limite = fecha.value;
  let prioridad = "";

  if (prioridadAlta.checked) prioridad = "alta";
  if (prioridadMedia.checked) prioridad = "media";
  if (prioridadBaja.checked) prioridad = "baja";

  if (titulo === "" || limite === "" || prioridad === "") {
    mensaje.textContent = "Por favor completa todos los campos.";
    return;
  }

  const texto = titulo + " - " + limite + " (" + prioridad + ")";
  crearTarea(texto);

  mensaje.textContent = "¡Tarea añadida con éxito!";
}

boton.onclick = agregarTarea;
