<template>
  <v-app-bar app color="purple darken-1" dark>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-divider vertical class="ml-1 mr-3"></v-divider>
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>
      <span class="caption">
        Select
      </span><br>
        Category
    </v-toolbar-title>
    <v-divider vertical class="ml-5"></v-divider>
    <div @click="goToHomePage" class="navbar__main-title">
      <h4>E-Commerce</h4>
    </div>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>
    <!-- User -->
    <v-btn @click="goToUserPage" icon class="mx-1">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    <v-divider vertical></v-divider>
    <v-btn icon class="mx-1">
      <v-badge color="purple lighten-2" content="2">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {}
  },
  methods: {
    goToHomePage() {
      console.log('Home Page indo de boas!')
      this.$router.push('/')
    },
    goToUserPage() {
      console.log('User Page indo de boas!')
      this.$router.push('/user')
    }
  },
}
</script>

<style scoped>
.navbar__main-title {
  position: absolute; 
  margin-left: auto; 
  margin-right: auto; 
  left: 0; right: 0; 
  text-align: center;
  cursor: pointer;
}
.v-toolbar__title {
  font-size: 1rem !important;
}
.v-badge__badge {
  font-size: 10px !important;
  height: 18px !important;
  min-width: 18px !important;
}
</style>