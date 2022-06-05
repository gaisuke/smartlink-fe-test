<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <CardSalary :inquiry="inquiries" />
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue'
import CardSalary from '@/components/CardSalary.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    CardSalary,
  },
  data(){
    return {
      inquiries: [],
    }
  },
  methods: {
    setinquiries(data){
      this.inquiries = data
    },
  },
  // get data
  mounted(){
    axios
    .get('https://boss.smartlink.id/salary/inquiry')
    .then((response) => {
      console.log('sukses', response.data.data)
      this.setinquiries(response.data.data)
    })
    .catch((error) => console.log('error',error))
  },
}
</script>
