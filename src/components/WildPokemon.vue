<template>
  <div class="wild-pokemon">
    <div>WILD</div>
    <ol>
      <li
        style="cursor: pointer"
        v-for="pokemon in wildpokemon"
        :key="pokemon.name"
        @click="setActive(pokemon)"
      >{{ pokemon.name }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "wildPokemon",
  methods: {
    setActive(pokemon) {
      this.$store.dispatch("setActivePokemon", pokemon);
    },
  },
  computed: {
    wildpokemon() {
      return this.$store.state.wildPokemon;
    },
  },
  mounted() {
    this.$store.dispatch("getWildPokemon");
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
.wild-pokemon {
  background-color: rgb(212, 220, 235);
}
</style>
