<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
  <div v-for='gettersBank in gettersBanks' :key='gettersBank.id'>
    {{gettersBank.id}} {{gettersBank.name}} {{gettersBank.address}}
    </div>
    <h1>Made By Actions</h1>
  <div v-for='bank in banks' :key='bank.id'>
    {{bank.id}} {{bank.name}} {{bank.address}}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
//import the global store object from Vuex
import {useStore} from 'vuex'
// declare the store variable
const store = useStore();

const msg = ref("Welcome to my Vuex Store");

// eslint-disable-next-line no-unused-vars
const getBanks = computed(() => {
  return store.getters.getBanks
})

const banks = computed(() => {
  return store.state.banks
})

onMounted(() => {
// dispatch the fetchBanks action which commits a mutation to update the state
  store.dispatch("fetchBanks");
})
</script>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>