<template>
  <v-app>
    <Dashboard />
    <Footer />
  </v-app>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Home",
  components: {
    Dashboard,
    Footer
  },
  data() {
    return {}
  },
};
</script>

<style scoped>

</style>
