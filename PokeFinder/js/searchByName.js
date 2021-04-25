let form = document.getElementById("form");
let lista = document.getElementById("container");

// Al presionar el boton 'Buscar'
function consultar() {
  let consulta = lista.querySelector("#buscar").value;
  consultarpokemon(consulta);
  form.reset();
}

// Mensaje de Error en la Búsqueda
function mensajeError() {
  alert("Pokemon no encontrado, intenta nuevamente.");
}

// ---------- BOTÓN HOME ---------- //
function openHomeForm() {
  window.location = "index.html";
}