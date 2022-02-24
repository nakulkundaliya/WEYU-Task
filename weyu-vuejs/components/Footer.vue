<template>
  <div class="mt-5">
    <v-row class="justify-center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="pa-5 rounded-lg">
          <h3 class="font-weight-bold text-center my-0">
            Refer friends for extra tiskets
          </h3>
          <p class="mb-0 text-caption text-center">
            Use your unique link below to refer your friends. You earn
            <span class="purple--text text--darken-3">2x points</span> for
            everyone who register trough your link
          </p>
          <v-text-field
            outlined
            dense
            label="Link"
            type="text"
            hide-details
            class="my-3"
            value="http://localhost:3000/"
          >
            <template #append>
              <v-btn
                type="submit"
                color="purple darken-3"
                class="white--text mb-2"
              >
                Copy Link
              </v-btn>
            </template>
          </v-text-field>
          <v-row class="mt-3">
            <v-col cols="12" sm="6" md="6">
              <v-btn depressed outlined block class="primary--text rounded-lg text-capitalize"
                >Share on Twitter <v-icon right> mdi-twitter </v-icon></v-btn
              >
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-btn depressed outlined block class="primary--text rounded-lg text-capitalize"
                >Share on Telegram
                <span class="ml-2"
                  ><img src="~/assets/icons/telegram.svg" alt=""
                /></span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
