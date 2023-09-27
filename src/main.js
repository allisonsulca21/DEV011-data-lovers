import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log( data.pokemon);
const allCards = renderItems(data.pokemon)
const root = document.querySelector("#root");
root.appendChild(allCards);