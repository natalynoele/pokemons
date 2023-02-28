import * as Pokemon from './js/render-pokemons';
const closeBtn = document.querySelector('.modal-close');
const backdrop = document.querySelector('.backdrop');

Pokemon.renderList();

const list = document.querySelector('.pokemons-list');
list.addEventListener('click', onPokemonClick);
function onPokemonClick(e) {  
   if (e.target.nodeName !== 'BUTTON') {
    return;
  } 
  const parent = e.target.closest('.pokemon_wrap');
  const name = parent.querySelector('.pokemon_name').textContent;  
  Pokemon.renderCard(name);
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  backdrop.classList.add('is-hidden');
}

