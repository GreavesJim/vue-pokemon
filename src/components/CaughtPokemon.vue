<template>
  <div class="caught-pokemon">
    <h1>My Pokemon</h1>
    <ol>
      <li
        style="cursor: pointer"
        v-for="pokemon in caughtPokemon"
        :key="pokemon.name"
      >{{ pokemon.name }}</li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "CaughtPokemon",
  data() {
    return {};
  },
  methods: {},
  computed: {
    caughtPokemon() {
      return this.$store.state.caughtPokemon[1];
    },
  },
  mounted() {
    this.$store.dispatch("getMyPokemon");
  },
};
</script>
<style>
</style>