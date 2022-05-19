<template>
  <v-app-bar app color="purple darken-1" dark>
    <v-btn class="ml-1" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-divider vertical class="ml-1"></v-divider>
    <div @click="goToHomePage" style="cursor: pointer;" class="ml-4">
      <h4>E-Commerce Website</h4>
    </div>
    <v-spacer></v-spacer>
    <v-btn @click="logOutAuthO" v-if="$auth.isAuthenticated" style="margin: 0px 15px;" color="purple" elevation="2">Logout</v-btn>
    <v-divider vertical></v-divider>
    <div v-if="!$auth.loading">
      <v-btn @click="logInAuthO" v-if="!$auth.isAuthenticated" style="margin: 0px 15px;" color="purple" elevation="2">Login</v-btn>
      <v-divider v-if="!$auth.isAuthenticated" vertical></v-divider>
      <v-btn v-if="$auth.isAuthenticated"  @click="goToUserPage" icon class="mx-1">
        <v-icon color="white">mdi-account-outline</v-icon>
      </v-btn>
    </div>
    <v-divider v-if="$auth.isAuthenticated" vertical></v-divider>
    <v-btn v-if="$auth.isAuthenticated" @click="goToCartPage" icon class="mx-1">
      <v-badge color="purple lighten-2" content="1">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
  data() {
    return {
      userIsAuth: false,
    }
  },
  mounted() {},
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },
    goToUserPage() {
      this.$router.push('/user')
    },
    goToCartPage() {
      this.$router.push('/cartpage')
    },
    logInAuthO() {
      this.$auth.loginWithRedirect();
    }, 
    logOutAuthO() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
  },
}
</script>

<style scoped>
.navbar__main-title {
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