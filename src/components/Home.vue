<template>
  <v-container fluid>
    <v-card color="purple darken-2"
            height="150px"
            tile
            flat
            class="d-flex align-center justify-center"
            dark>
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">AMAZING CLOTHS</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#fff">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="8" class="pr-0">
          <v-card height="250px" tile flat color="purple lighten-3">
            <v-row>
              <v-col cols="12" sm="4" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutuppercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">MOUNTAIN BIKE</h6>
                <h3 class="white--text mt-5">Trek Speed Concept</h3>
                <v-btn rounded
                       color="#1c1c1c"
                       dark
                       class="withoutuppercase px-8 mt-10">
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="8">
                <v-img src="bike.png"
                       max-height="400"
                       max-width="400"
                       contain
                       class="mt-n6">
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="pl-0">
          <v-card height="250px" tile flat color="purple lighten-2">
            <v-row>
              <v-col cols="12" sm="6" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutuppercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">DOWN JACKET</h6>
                <h3 class="white--text mt-5">Sale Collection 2022</h3>
                <v-btn rounded
                       color="#1c1c1c"
                       dark
                       class="withoutuppercase px-8 mt-3">
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="jacket2.png"
                       max-height="400"
                       max-width="420"
                       contain
                       class="mt-n2">
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="mt-n3">
          <v-row>
            <v-col cols="12"
                   sm="4"
                   v-for="(cloth, i) in clothes"
                   :key="i"
                   :class="cloth.class">
              <v-hover v-slot:default="{ hover }">
                <v-card height="300" align="center" flat outlined tile>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" small dark>{{ cloth.sold }}</v-btn>
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
        </v-col>
        <v-col cols="12" sm="6" class="mt-n2 px-0 pb-0">
          <v-toolbar flat outlined class="text-center">
            <v-pagination v-model="page" :length="4"></v-pagination>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>
    <v-card color="#eff0f2" height="250px" tile flat dark class="d-flex align-center justify-center mt-n10 card2">
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
export default {
  name: "Home",
  data() {
    return {
      page: 1,
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_home",
        },
        /* {
          text: "Catalog",
          disabled: false,
          href: "breadcrumbs_catalog",
        },
        {
          text: "Men",
          disabled: false,
          href: "breadcrumbs_men",
        },
        {
          text: "Shoes",
          disabled: false,
          href: "breadcrumbs_shoes",
        }, */
      ],
      styles: [
        { title: "Lifestyle", count: "1" },
        { title: "Running", count: "23" },
        { title: "Training & Gym", count: "45" },
        { title: "Basketball", count: "11" },
        { title: "Football", count: "15" },
        { title: "Soccer", count: "32" },
        { title: "Baseball", count: "8" },
        { title: "Golf", count: "15" },
        { title: "Skateboarding", count: "22" },
      ],
      brands: [
        { title: "Lifestyle", state: true },
        { title: "Running", state: false },
        { title: "Training & Gym", state: true },
        { title: "Basketball", state: false },
      ],
      sizes: [
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
      ],
      clothes: [],
    };
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> this.clothes = json)
    }
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
</style>
