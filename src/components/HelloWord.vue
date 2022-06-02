<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div>
      <ul v-for='bank in banks' :key='bank.id'>
        <li>Bank Title: {{bank.bank}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'We are learning vuex!!'
    }
  },
  computed: {
    banks() {
      return this.$store.state.banks
    }
  },
  mounted() {
    this.$store.dispatch("getBanks");
  }
}
</script> 