<template>
  <div>
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
    
  </div>
</template>

<script>
export default {
  name: 'SpotlightProducts',
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>