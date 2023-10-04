import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/pokemon/pokemon.js';

//console.log( data.pokemon);
const allCards = renderItems(data.pokemon)
const root = document.querySelector("#root");
root.appendChild(allCards);

//console.log('main', data.pokemon[0].type[0]);
const value='grass';

const filterType = filterData(data.pokemon,"type", value);
console.log(filterType);
