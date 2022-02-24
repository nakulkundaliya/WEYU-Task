<template>
  <div>
    <v-row class="justify-center mt-5">
      <v-col cols="12" sm="12" md="10">
        <div class="top-bar-sec pa-3">
          <v-row class="justify-center align-center">
            <v-col cols="12" sm="6" md="2">
              <div class="rounded-lg primary py-2 d-flex align-center justify-center bg-gradient">
                <div>
                  <v-icon color="white">mdi-check-circle</v-icon>
                </div>
                <div class="ml-3">
                  <h5 class="my-0 white--text">382</h5>
                  <p class="mb-0 white--text">Points</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <div class="text-center">
                <v-icon color="purple darken-3">mdi-check-circle</v-icon>
                <p class="mb-0 mt-2">0X89205A3B2ae...</p>
                <h4 class="mt-1 purple--text text--darken-3 mb-0">
                  BSC Verified
                </h4>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <div class="text-center">
                <v-icon color="purple darken-3">mdi-check-circle</v-icon>
                <p class="mb-0 mt-2">0X89205A3B2ae...</p>
                <h4 class="mt-1 purple--text text--darken-3 mb-0">
                  SOL Verified
                </h4>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <div class="text-center">
                <v-icon color="purple darken-3">mdi-check-circle</v-icon>
                <p class="mb-0 mt-2">Telegram</p>
                <h4 class="mt-1 purple--text text--darken-3 mb-0">Connected</h4>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <div class="text-center">
                <v-icon color="purple darken-3">mdi-check-circle</v-icon>
                <p class="mb-0 mt-2">mail@gmail.com</p>
                <h4 class="mt-1 purple--text text--darken-3 mb-0">Connected</h4>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-5">
      <v-col cols="12" sm="12" md="11">
        <v-card class="rounded-lg pa-5 overflow-auto" height="500px">
          <div class="text-center">
            <h3 class="font-weight-bold">Do a task for extra points</h3>
            <p class="mb-0 text-body-1">
              Weyu Points are redeemable for all sorts of crypto.
            </p>
            <p class="text-body-1">
              NFTs and prizes in the WEYU Points marketplace
            </p>
            <v-btn
              depressed
              color="purple darken-3"
              class="white--text rounded-lg"
            >
              Redeem your points
            </v-btn>
          </div>
          <v-row class="mt-5">
            <v-col
              cols="12"
              sm="4"
              md="2"
              v-for="(item, index) in pointsData"
              :key="index"
            >
              <PointCard :pointsData="item" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PointsData } from "~/types";
export default Vue.extend({
  data() {
    return {
    };
  },
  computed: {
    pointsData(): PointsData {
      return this.$store.state.point.points
    },
  },
  async fetch() {
    console.log("calll fetch");
    
      try {
      await this.$store.dispatch(
        'point/fetchPoints',
        {
          api: this.$api,
          page: 1,
          per: 50,
        }
      )
    } catch (error) {
     console.log("error", error);
    }
  }
});
</script>
<style lang="scss" scoped>
.top-bar-sec {
  border: 1px solid #ededed;
  border-radius: 8px;
}
.bg-gradient {
 background: linear-gradient(53deg, rgba(0,212,255,0.6250875350140056) 0%, rgba(9,9,121,0.577468487394958) 51%, rgba(255,0,44,0.8379726890756303) 100%);
}
</style>
