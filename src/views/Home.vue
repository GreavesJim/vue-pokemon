<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-3">
        <Wild-Pokemon />
      </div>
      <div class="col-6">
        <Current-Pokemon />
      </div>
      <div class="col-3">
        <Caught-Pokemon />
      </div>
    </div>
  </div>
</template>

<script>
import WildPokemon from "@/components/WildPokemon";
import CaughtPokemon from "@/components/CaughtPokemon";
import CurrentPokemon from "@/components/CurrentPokemon";

export default {
  name: "home",
  components: {
    WildPokemon,
    CaughtPokemon,
    CurrentPokemon
  }
};
</script>
