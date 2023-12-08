<script setup>
import { ref } from 'vue'
import { usePokedexStore } from '../stores/pokedex';
const pokedexStore = usePokedexStore()

const searchvalue = ref('')
 
function buscar() {
  pokedexStore.setText(searchvalue.value)
}

</script>

<template>
  <input class="Pesquisa" type="text" v-model="searchvalue" @keypress.enter="buscar"/>

  <ul class="stats">
    <h2>Stats:</h2>
    
</ul>
</template>

<style>
.Pesquisa {
  border-radius: 15px;
  width: 90%;
  background-color: #2385c2;
  border: #dc0a2d;
}
</style>
