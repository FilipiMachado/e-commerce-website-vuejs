<template>
  <div class="text-center productcategory__main-content">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark 
               v-bind="attrs" 
               v-on="on"
               icon> 
            <v-icon style="cursor: pointer">mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="categories in categoriesData" :key="categories.id">
          <v-list-item-title @click="chooseCategory(categories)" class="productcategory__list-item">{{ categories.toUpperCase() }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'ProductCategory',
  data() {
    return {
      categoriesData: undefined,
    };
  },
  mounted() {
    this.getCategories()
    console.log(this.$store.state.categoryName)
  },
  methods: {
    getCategories() {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((json) => {
              this.categoriesData = json
              console.log(json)
            })
    },
    chooseCategory(payload) {
      console.log(this.$store.state.categoryName)
      console.log(payload)
      this.$store.state.categoryName = payload
    },
  }
};
</script>

<style>
.productcategory__main-content {
  z-index: 100;
}
.productcategory__list-item {
  cursor: pointer;
}
</style>