let battle = document.getElementById("pokemonBattle");

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
  let card = battle.querySelector(`#pokemon-${num}`);
  let imagen = card.getElementsByTagName("img")[0];
  let footer = card.querySelector(`#cardFooter`);

  if (pokemon.sprites.other.dream_world.front_default != null) {
    imagen.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  } else {
    imagen.setAttribute("src", pokemon.sprites.front_default);
  }

  imagen.setAttribute("alt", pokemon.name);

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


function openHomeForm() {
  window.location = "index.html";
}


pokemonesRandom(2);