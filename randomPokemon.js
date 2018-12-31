// npm install -g pokemon-picker
// npm install pokemon-gif --save

const pokemon = require('pokemon-picker');
const pokemonGif = require('pokemon-gif');


var randomPokemon = pokemon.randomize();
var gifURL = pokemonGif(randomPokemon.index);



function randomBetween(first, second) {
  return Math.floor(Math.random() * (second - first) + first);
}
