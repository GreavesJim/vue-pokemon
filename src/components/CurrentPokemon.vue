<template>
  <div class="current-pokemon">
    <div>Current</div>
    <img height="100px" :src="
        current.sprites.front_default
      " />

    <div>{{ current.name }}</div>
    <button class="btn btn-danger" @click="catchPokemon(current)">Catch</button>
  </div>
</template>

<script>
export default {
  name: "currentPokemon",
  computed: {
    current() {
      return this.$store.state.activePokemon;
    },
  },
  methods: {
    catchPokemon(current) {
      let pokemon = {
        types: current.types,
        name: current.name,
        img: current.sprites.front_default,
        weight: current.weight,
      };

      this.$store.dispatch("catchPokemon", pokemon);
    },
  },
};
</script>

<style>
.current-pokemon {
  background-color: rgb(26, 245, 228);
}
</style>
