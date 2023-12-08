<script setup>
import { onMounted  } from "vue";
import { usePokedexStore } from "../stores/pokedex";
const pokedexStore = usePokedexStore()

onMounted(async () => {
  await pokedexStore.getGen3()
})
  
</script>

<template>
  <h1 class="titulo">Pokedex Gen 3 - novo</h1>
  <!-- {{ pokedexStore.filtrados }} -->
  <div class="pokemonlist-area">
    <div
      class="pokemon-area"
      v-for="pokemon in pokedexStore.gen3"
      :key="pokemon"
      @click="ShowDetail"
    >
      <div class="img-area">
        <img class="pokemon-img" :src="pokemon.sprites.front_default" />
      </div>
      <div class="nome-area">{{ pokemon.name }} | {{ pokemon.id }}</div>
    </div>
  </div>
</template>

<style>
.pokemonlist-area {
  display: flex;
  justify-content: center;
  gap: 1%;
  padding: 20px;
  height: 100%;
  min-height: auto;
  flex-wrap: wrap;
}

h1 {
  text-align: center;
  height: 100%;
}
.pokemon-area {
  height: 280px;
  width: 280px;
  background-color: rgb(160, 151, 139);
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
}
.nome-area {
  text-align: center;
  align-items: center;
  color: black;
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.img-area {
  width: 100%;
  height: 80%;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.pokemon-img {
  width: 100%;
  height: 100%;
}
</style>
