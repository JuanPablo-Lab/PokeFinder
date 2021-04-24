// FUNCIONES AQUÍ
class PokemonPorTipo {
  static valores = [];
  static paginaActual = 0;
}

function consultarTipos() {
  fetch(`https://pokeapi.co/api/v2/type?limit=30`).then(function (response) {
    if (response.ok == true) {
      response.json().then(function (lista) {
        crearListaTipos(lista.results);
      });
    } else {
      mensajeError();
    }
  });
}

function crearListaTipos(tipos) {
  let selectTipos = document.getElementById("listaTipos");
  tipos.forEach(element => {
    let optionValue = document.createElement('option');
    optionValue.value = element.name;
    optionValue.className = "listaTiposItem";
    optionValue.appendChild(document.createTextNode(element.name));
    selectTipos.appendChild(optionValue);
  });
}

function consultar() {
  let selectTipos = document.getElementById("listaTipos");
  let selectedValue = selectTipos.options[selectTipos.selectedIndex].value;
  consultarPokemon(selectedValue);
}

function consultarPokemon(consulta) {
  fetch(`https://pokeapi.co/api/v2/type/${consulta}`).then(function (response) {
    if (response.ok == true) {
      response.json().then(function (lista) {
        crearListaPokemon(lista.pokemon);
      });
    } else {
      mensajeError();
    }
  });
}

function crearListaPokemon(pokemon) {
  PokemonPorTipo.valores = pokemon;
  PokemonPorTipo.paginaActual = 0;

  crearPaginas();
  crearTarjetas();
}

function crearTarjetas() {
  let pokemon = PokemonPorTipo.valores;
  let pagina = PokemonPorTipo.paginaActual;

  let col0 = document.getElementById("col0");
  let col1 = document.getElementById("col1");
  let col2 = document.getElementById("col2");
  let col3 = document.getElementById("col3");
  let col4 = document.getElementById("col4");
  let col5 = document.getElementById("col5");

  let cols = [col0, col1, col2, col3, col4, col5];

  let startValue = pagina * 6;
  let endValue = startValue + 6;
  let subpokemon = pokemon.slice(startValue, endValue);

  var index = 0;
  subpokemon.forEach(element => {
    let pokemonId = getIdFromUrl(pokemon.url);
    let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    let imageUrl = baseUrl + pokemonId + ".png";
    
    let image = cols[index].getElementByTagName("img")[0];
    image.setAttribute("src", imageUrl);

    let name = cols[index].getElementsByTagName("p")[0];
    name.textContent = pokemon.name;
  });
}

function crearPaginas() {
  let pagesList = document.getElementsById("pagesList");
  pagesList.innerHTML = "";

  let div = math.floor(PokemonPorTipo.valores.length / 6); 
  let rem = PokemonPorTipo.valores.length % x6;
  let total = div + (rem > 0 ? 1 : 0);

  for (let index = 0; index < total; index++) {
  }
}

function irAPagina(pagina) {
  PokemonPorTipo.paginaActual = pagina - 1;
  crearTarjetas();
}

// ---------- BOTÓN HOME ---------- //
function openHomeForm() {
  window.location = "index.html";
}

// Mensaje de Error en la Búsqueda
function mensajeError() {
  alert("Lista de tipos no disponible en el momento, intenta nuevamente más tarde.");
}

function getIdFromUrl(url) {
  var comps = url.split("/");
    var id = comps[comps.length - 2];

    return id;
}