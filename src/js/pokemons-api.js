import axios from 'axios';
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';
const options = '?offset=20&limit=20';
export default class Pokemons {
  constructor() {
    this.pokemonName = '';
  }

  async getPokemonsInfo() {
    try {
      const pokemonsList = await this.fetchPokemonsList();
      if (pokemonsList.length === 0 || pokemonsList === undefined) {
        console.log('no data');
        return;
      }
      const arrayOfPokemons = await Promise.all(
        pokemonsList.map(element => this.fetchPokemon(element.name))
      );
      return arrayOfPokemons;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchPokemonsList(pokemonName) {
    const response = await axios.get(ENDPOINT);
    return response.data.results;
  }
  async fetchPokemon(name) {
    try {
      const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';
      const itemPokemon = await axios.get(`${ENDPOINT}/${name}`);
      console.log(itemPokemon.data);
      return itemPokemon.data;
    } catch (err) {
      console.log(err);
    }
  }
  get name() {
    return this.pokemonName;
  }

  set name(newName) {
    this.pokemonName = newName;
  }
}
