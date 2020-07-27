import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";

let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 3000,
});
let myApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/jim/pokemon",
  timeout: 3000,
});
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePokemon: {},
    wildPokemon: [],
    caughtPokemon: [],
  },
  mutations: {
    storeWildPokemon(state, pokemon) {
      state.wildPokemon = pokemon;
    },
    setActivePokemon(state, pokemon) {
      state.activePokemon = pokemon;
    },
    setMyPokemon(state, pokemon) {
      state.caughtPokemon.push(pokemon);
    },
  },
  actions: {
    async getWildPokemon({ commit, dispatch }) {
      let res = await _pokemonApi.get("");
      commit("storeWildPokemon", res.data.results);
    },

    async setActivePokemon({ commit, dispatch }, pokemon) {
      let res = await _pokemonApi.get("/" + pokemon.name);
      commit("setActivePokemon", res.data);
    },
    async getMyPokemon({ commit, dispatch }) {
      let res = await myApi.get("");
      commit("setMyPokemon", res.data.data);
    },
    async catchPokemon({ commit, dispatch }, pokemon) {
      await myApi.post("", pokemon);
      dispatch("getMyPokemon");
    },
  },
  modules: {},
});
