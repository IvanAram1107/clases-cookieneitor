if(process.argv.length != 3) {
  process.exit();
}

const pokemonName = process.argv[2].trim();


function getPokemonWithPromise(pokemon) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  });
}


getPokemonWithPromise(pokemonName); 