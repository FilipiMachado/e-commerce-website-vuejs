<template>
  <v-app>
    <header>
      <Navbar class="index"/>
    </header>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.index {
  z-index: 99;
}
</style>
