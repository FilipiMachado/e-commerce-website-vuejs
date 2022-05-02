<template>
  <v-container fluid>
    <v-card color="#3853d8" height="150px" tile flat class="d-flex align-center justify-center" dark>
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">AMAZING SHOES</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7c92fe">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="8" class="pr-0">
          <v-card height="250px" tile flat color="#3890d8">
            <v-row>
              <v-col cols="12" sm="4" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutuppercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">MOUNTAIN BIKE</h6>
                <h3 class="white--text mt-5">Trek Speed Concept</h3>
                <v-btn rounded color="#4c9cdb" dark class="withoutuppercase px-8 mt-10">
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="8">
                <v-img src="bike.png" max-height="400" max-width="400" contain class="mt-n6"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="pl-0">
          <v-card height="250px" tile flat color="#6857e1">
            <v-row>
              <v-col cols="12" sm="6" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutuppercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">DOWN JACKET</h6>
                <h3 class="white--text mt-5">Sale Collection 2022</h3>
                <v-btn rounded color="#8375e7" dark class="withoutuppercase px-8 mt-3">
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="jacket2.png" max-height="400" max-width="420" contain class="mt-n2"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3" class="mt-n6 pr-0">
          <v-toolbar flat outlined>
            <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon class="ml-1">
              <v-icon color="#3853d8">
                mdi-sync
              </v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              SPORT BY: <span>Price $-$$</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4">
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 px-0">
          <v-toolbar flat outlined class="">
            <v-toolbar-title>SHOW: <span>12</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4">
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 pl-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="#3853d8">mdi-apps</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn icon class="mx-1">
              <v-icon color="grey">mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-toolbar-title class="ml-2">
              <strong>COMPARE:</strong>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-badge color="#3853d8" content="3" class="mr-2"></v-badge>
          </v-toolbar>
        </v-col>
        <v-col cols="3" class="py-0 pr-0 mt-n3">
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>CATEGORIES</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-list dense class="mt-n5">
              <v-list-item v-for="style in styles" :key="style.title">
                <v-list-item-content>
                  <v-list-item-title v-text="style.title" class="ml-8"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-subtitle v-text="style.count"></v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>PRICE</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey">mdi-close</v-icon>
            </v-toolbar>
            <v-toolbar flat>
              <v-text-field placeholder="$50" filled rounded dense class="mr-2"></v-text-field>
              <v-text-field placeholder="$1900" filled rounded dense class="mx-2"></v-text-field>
            </v-toolbar>
            <v-range-slider color="blue" max="40" min="30"></v-range-slider>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
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
      },
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
    }
  }
}
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
  opacity: .5;
  position: absolute;
  widows: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>