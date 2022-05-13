<template>
  <v-app>
    <header>
      <Navbar class="index"/>
    </header>
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {}
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
.index {
  z-index: 99;
}
</style>
