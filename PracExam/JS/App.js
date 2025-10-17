
document.getElementById("boton").addEventListener("click", agregarElemento);

function agregarElemento() {
   
    const texto = document.getElementById("nuevoElemento").value;
    const mensajeError = document.getElementById("mensajeError");

    if (texto.trim() === "") {
        mensajeError.textContent = "Escribe algo antes de agregar.";
        return;
    }

    if (texto.trim() === "") {
        alert("Escribe algo antes de agregar.");
        return;
    }

    mensajeError.textContent = "";

    const li = document.createElement("li");
    li.textContent = texto;

    document.getElementById("lista").appendChild(li);

    document.getElementById("nuevoElemento").value = "";
}
