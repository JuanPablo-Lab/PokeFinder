let form = document.getElementById("form");
let lista = document.getElementById("container");

// Al presionar el boton 'Buscar'
function consultar() {
  let consulta = lista.querySelector("#buscar").value;
  consultarpokemon(consulta);
  form.reset();
}

// Conexión con PokeApi
function consultarpokemon(consulta) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${consulta}`).then(function (
    response
  ) {
    if (response.ok == true) {
      response.json().then(function (pokemon) {
        crearPokemon(pokemon);
      });
    } else {
      mensajeError();
    }
  });
}

// Pintar Pokemon
function crearPokemon(pokemon) {
  let card = lista.querySelector(`#pokemon`);
  let imagen = document.getElementById("imgPokemon");
  let footer = card.querySelector(`#cardFooter`);

  if (pokemon.sprites.other.dream_world.front_default != null) {
    imagen.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  } else {
    imagen.setAttribute("src", pokemon.sprites.front_default);
  }

  let nombre = card.getElementsByTagName("h1")[0];
  nombre.textContent = pokemon.name;

  let vida = card.getElementsByTagName("p")[0];
  vida.textContent = pokemon.stats[0].base_stat + " Hp";

  let xp = card.getElementsByTagName("p")[1];
  xp.textContent = pokemon.base_experience + " Xp";

  let ataque = footer.getElementsByTagName("h3")[0];
  ataque.textContent = pokemon.stats[1].base_stat + " K";

  let especial = footer.getElementsByTagName("h3")[1];
  especial.textContent = pokemon.stats[3].base_stat + " K";

  let defensa = footer.getElementsByTagName("h3")[2];
  defensa.textContent = pokemon.stats[2].base_stat + " K";
}

// Mensaje de Error en la Búsqueda
function mensajeError() {
  alert("Pokemon no encontrado, intenta nuevamente.");
}

// ---------- BOTÓN HOME ---------- //
function openHomeForm() {
  window.location = "index.html";
}