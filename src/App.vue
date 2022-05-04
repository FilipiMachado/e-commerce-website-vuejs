<template>
  <v-app>
    <header>
      <Navbar class="index"/>
    </header>
    <v-main>
      <router-view/>
    </v-main>
    <footer>
      <Footer />
    </footer>
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

<style scoped>
.index {
  z-index: 99;
}
</style>
