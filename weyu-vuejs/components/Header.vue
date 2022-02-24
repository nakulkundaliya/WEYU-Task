<template>
  <div>
    <v-row class="align-center mx-auto">
      <v-col cols="12" sm="12" md="6">
        <div class="d-flex align-center">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="d-flex d-sm-flex d-md-none"
          />
          <NuxtLogo />
          <v-text-field
            solo
            label="Search"
            prepend-inner-icon="mdi-magnify"
            class="search-input ml-5"
            full-width
            hide-details
            dense
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <div class="d-none d-sm-none d-md-flex">
          <v-list class="d-flex">
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :to="item.to"
              router
              exact
            >
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-bold"
                  v-text="item.title"
                />
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <img src="~/assets/icons/notifications.svg" width="30" alt="" />
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-menu bottom transition="scale-transition" offset-y nudge-bottom="5">
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <div class="d-flex align-center">
                        <div>
                          <v-avatar class="mr-3">
                            <img
                              src="https://cdn.vuetifyjs.com/images/john.jpg"
                              alt="John"
                            />
                          </v-avatar>
                        </div>
                        <div>
                          <span>User_name</span>
                        </div>
                      </div>
                    </div>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>
                        <v-icon>mdi-logout </v-icon>
                        Logout</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-menu bottom transition="scale-transition" offset-y nudge-bottom="5">
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <div class="d-flex align-center">
                    <div>
                      <v-avatar class="mr-3">
                        <img
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                          alt="John"
                        />
                      </v-avatar>
                    </div>
                    <div>
                      <span>User_name</span>
                    </div>
                  </div>
                </div>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-icon>mdi-logout </v-icon>
                    Logout</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Earn",
        },
        {
          title: "WE-Launch",
        },
        {
          title: "Pieces",
        },
        {
          title: "Token",
        },
        {
          title: "Explore",
        },
      ],
    };
  },
});
</script>
