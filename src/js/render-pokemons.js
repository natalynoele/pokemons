import PokemonsApiService from './pokemons-api';
import {
  makeElementMarkup,
  createMarkupOfPokemonCard,
} from './pokemons-markup';

const Pokemons = new PokemonsApiService();
const refs = {
  pokemonsList: document.querySelector('.pokemons-list'),
  addBtn: document.querySelector('.add-btn'),
  modal: document.querySelector('.modal'),
  backdrop: document.querySelector('.backdrop')
};

export function renderList() {
  Pokemons.getPokemonsInfo().then(pokemons => {
    const markup = pokemons.map(makeElementMarkup).join('');
    refs.pokemonsList.innerHTML = markup;
  });
}

export function renderCard(name) {
  Pokemons.getPokemonsInfo().then(pokemons => {
    const pokemon = pokemons.find(element => element.name === name);
    const markup = createMarkupOfPokemonCard(pokemon);
    refs.backdrop.classList.remove('is-hidden');
    refs.modal.innerHTML = markup;
  });
}

