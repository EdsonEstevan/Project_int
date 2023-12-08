import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import PokeApi from "../api/pokemons.js";
const pokeApi = new PokeApi();

export const usePokedexStore = defineStore('pokedex', () => {
  const state = reactive({
    busca: '',
    gen1: [],
    gen2: [],
    gen3: [],
  })

  const setText = (text) => state.busca = text

  const gen1 = computed(() => filtrados.value.length >0 ? filtrados.value : state.gen1)
  const gen2 = computed(() => filtrados.value.length >0 ? filtrados.value : state.gen2)
  const gen3 = computed(() => filtrados.value.length >0 ? filtrados.value : state.gen3)


  const todos = computed(() => [].concat(state.gen1, state.gen2, state.gen3))

  const filtrados = computed(() => state.busca ? todos.value.filter(e => e.name.includes(state.busca)) : [])

  const getGen1 = async () => {
    const t_pokemons = await pokeApi.buscarTodosOsPokemonsGen1();
    for (const t_poke of t_pokemons) {
      const poke = await pokeApi.buscarPokemonsTipos(t_poke.url);
      state.gen1.push({
        id: poke.id,
        ...t_poke,
        game_indices: { ...poke.game_indices },
        sprites: { ...poke.sprites },
      });
    }
  }

  const getGen2 = async () => {
    const t_pokemons = await pokeApi.buscarTodosOsPokemonsGen2();
    for (const t_poke of t_pokemons) {
      const poke = await pokeApi.buscarPokemonsTipos(t_poke.url);
      state.gen2.push({
        id: poke.id,
        ...t_poke,
        game_indices: { ...poke.game_indices },
        sprites: { ...poke.sprites },
      });
    }
  }

  const getGen3 = async () => {
    const t_pokemons = await pokeApi.buscarTodosOsPokemonsGen3();
    for (const t_poke of t_pokemons) {
      const poke = await pokeApi.buscarPokemonsTipos(t_poke.url);
      state.gen3.push({
        id: poke.id,
        ...t_poke,
        game_indices: { ...poke.game_indices },
        sprites: { ...poke.sprites },
      });
    }
  }

  return { gen1, getGen1, gen2, getGen2, gen3, getGen3, filtrados, setText }
})
