<template>
  <v-app-bar app color="purple darken-1" dark>
    <v-divider vertical class="mr-3"></v-divider>
    <v-btn @click="getCategories" icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>
      Categories
    </v-toolbar-title>
    <v-divider vertical class="ml-5"></v-divider>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-divider vertical class="ml-1"></v-divider>
    <div @click="goToHomePage" style="cursor: pointer;" class="ml-4">
      <h4>E-Commerce Website</h4>
    </div>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>
    <v-btn @click="goToUserPage" icon class="mx-1">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    <v-divider vertical></v-divider>
    <v-btn @click="goToCartPage" icon class="mx-1">
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
  mounted() {
    this.getCategories()
  },
  methods: {
    goToHomePage() {
      console.log('Home Page indo de boas!')
      this.$router.push('/')
    },
    goToUserPage() {
      console.log('User Page indo de boas!')
      this.$router.push('/user')
    },
    goToCartPage() {
      console.log('Cart Page indo de boas!')
      this.$router.push('/cartpage')
    },
    getCategories() {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json => console.log(json))
    },
  },
}
</script>

<style scoped>
.navbar__main-title {
  /* position: absolute;  */
  /* margin-left: auto;  */
  /* margin-right: auto;  */
  /* left: 0; 
  right: 0; 
  display: flex;
  justify-content: center; */
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