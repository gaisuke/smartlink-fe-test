<template>
  <div>
    <div v-for="bank in banks" v-bind:key="bank.nomor">
      <h2>{{ bank.bank }}</h2>
      <p>{{ bank.pemilik }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    banks() {
         return this.$store.getters.banks;
      },
  },
  created() {
    this.$store.dispatch('loadBanks');  
  },
}
</script>