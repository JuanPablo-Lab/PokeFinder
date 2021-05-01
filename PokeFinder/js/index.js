let lista = document.getElementById("pokemonList");

// Crear número random
function pokemonesRandom(rep) {
  var Id = 0;

  for (let i = 1; i <= rep; i++) {
    Id = Math.round(Math.random() * 898);
    consultarPokemon(Id, i);
  }
}

// Conexión con PokeApi
function consultarPokemon(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function (response) {
    response.json().then(function (pokemon) {
      crearPokemon(pokemon, num);
    });
  });
}

// Pintar Pokemon
function crearPokemon(pokemon, num) {
  let item = lista.querySelector(`#pokemon-${num}`);
  let imagen = item.getElementsByTagName("img")[0];

  let pokeImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.id + ".png";
  if (pokemon.sprites.other.dream_world.front_default != null) {
    //imagen.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
    imagen.setAttribute("src", pokeImageUrl);
  } else {
    imagen.setAttribute("src", pokemon.sprites.front_default);
  }

  imagen.setAttribute("alt", pokemon.name);

  let nombre = item.getElementsByTagName("p")[0];
  nombre.textContent = pokemon.name;
}


function searchByNameForm() {
  window.location = "searchByName.html";
}

function searchByTypeForm() {
  window.location = "searchByType.html";
}

function openBattleForm() {
  window.location = "battle.html";
}


pokemonesRandom(4);