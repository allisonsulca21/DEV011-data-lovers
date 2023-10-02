import { example, filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/pokemon/pokemon.js';

//console.log( data.pokemon);
const allCards = renderItems(data.pokemon)
const root = document.querySelector("#root");
root.appendChild(allCards);

console.log('main', data.pokemon[0].type[0]);
const value='grass';

const filterType = filterData(data.pokemon,"type", 
"grass");
console.log(filterType);

//Obtendremos la referencia del elemento
const $select = document.getElementById('filtro1'); //$prefijamos el $ q indica que no es un valor normal, si nó un elemento
//Agregaremos una opción a la lista desplegable
const add = () => {
    const option = document.createElement('option');
    const valuE = new Date().getTime();
    option.value = valuE;
    option.text = valuE;
    $select.appendChild(option);
}