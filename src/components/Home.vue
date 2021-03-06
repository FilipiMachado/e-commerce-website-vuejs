<template>
  <v-container style="margin: 0 auto; max-width: 1280px;" fluid>
    <v-card color="purple darken-2"
            height="150px"
            tile
            flat
            class="d-flex align-center justify-center"
            dark>
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">ALL PRODUCTS WITH 10% DISCOUNT!</h4>
          <div style="text-align: center;">
            <v-btn class="mr-3" @click="getCategories" icon>
              <div class="text-center productcategory__main-content">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="purple" 
                           v-bind="attrs" 
                           v-on="on"> 
                      <span>Categories</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="categories in categoriesData" :key="categories.id">
                      <v-list-item-title @click="chooseCategory(categories)" 
                                         class="productcategory__list-item">{{ categories.toUpperCase() }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 card1" color="white">
      <v-row>
        <SpotlightProducts />
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col @click="goToSingleProductPage(cloth.id)" style="cursor: pointer;"
                   cols="12"
                   sm="4"
                   v-for="(cloth, i) in clothes"
                   :key="i"
                   :class="cloth.class">
              <v-hover v-if="cloth" v-slot:default="{ hover }">
                <v-card height="300" align="center" flat outlined tile>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" small dark>10% OFF!</v-btn>
                  </v-card-actions>
                  <v-img :src="cloth.image"
                         width="200"
                         height="200"
                         contain>
                  </v-img>
                  <v-card-text class="mt-n4">
                    <strong :class="hover ? 'black--text' : 'black--text'">
                      {{ cloth.title }}
                    </strong>
                  </v-card-text>
                  <v-expand-transition>
                    <div v-if="hover" 
                         class="d-flex transition-fast-in-fast-out purple v-card--reveal display-3 white--text"
                         style="height: 100%;">
                      <v-btn rounded color="white">
                        <v-icon>mdi-cart-outlined</v-icon>
                        Buy
                      </v-btn>
                      <v-btn fab small color="white" class="ml-2">
                        <v-icon color="black">mdi-content-copy</v-icon>
                      </v-btn>
                      <v-btn fab small color="white" class="ml-2">
                        <v-icon color="black">mdi-heart-outline</v-icon>
                      </v-btn>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <LazyLoading class="mt-6" v-if="isLoading"/>
        </v-col>
        <v-col style="margin: 0 auto;" cols="12" sm="6" class="mt-n2 px-0 pb-0">
          <v-toolbar style="background-color: #CE93D8;"  flat outlined class="text-center">
            <v-pagination style="margin: 0 auto;" 
                          v-model="page" 
                         :length="4"></v-pagination>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>
    <v-card color="#eff0f2" 
            height="250px" 
            tile 
            flat 
            dark 
            class="d-flex align-center justify-center mt-n10 card2">
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center black--text mt-10">SUBSCRIBE TO OUR NEWSLETTER</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <h6 class="text-center grey--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eaque, tenetur tempora in commodi deserunt ipsa natus libero culpa veniam cupiditate rerum cum voluptatibus laboriosam debitis, mollitia aliquid molestiae dolorum!
          </h6>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card flat color="transparent" class="d-flex justify-center">
            <v-text-field placeholder="Enter Your Email" 
                          rounded 
                          class="shrink" 
                          background-color="grey"
                          filled
                          append-icon="mdi-email-outline"
                          dense>
            </v-text-field>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SpotlightProducts from '@/components/SpotlightProducts.vue'
import LazyLoading from '@/components/LazyLoading.vue'

export default {
  name: "Home",
  components: {
    SpotlightProducts,
    LazyLoading,
  },
  data() {
    return {
      page: 1,
      categoriesData: undefined,
      clothes: [],
      isLoading: undefined,
    };
  },
  mounted() {
    this.getProducts()
    this.getCategories()
  },
  methods: {
    getProducts() {
      this.isLoading = true
      fetch('https://fakestoreapi.com/products?limit=8')
            .then(res=>res.json())
            .then((json)=> {
              this.clothes = json
              this.isLoading = false
            })
    },
    goToSingleProductPage(payload) {
      console.log(payload)
      this.$router.push(`/single-product/${payload}`)
    },
    getCategories() {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((json) => {
              this.categoriesData = json
              console.log(this.categoriesData)
              //console.log(json)
            })
    },
    chooseCategory(payload) {
      this.isLoading = true
      fetch(`https://fakestoreapi.com/products/category/${payload}`)
            .then(res=>res.json())
            .then((json)=> {
              this.isLoading = false
              this.clothes = json
            })
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0px !important;
}
.v-btn.withoutuppercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0px;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
.v-breadcrumbs >>> a {
  color: #fff;
}
.productcategory__main-content {
  z-index: 100;
}
.productcategory__list-item {
  cursor: pointer;
}
</style>
