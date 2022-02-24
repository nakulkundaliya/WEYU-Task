<template>
  <v-app>
    <v-main>
      <v-container>
        <Header />
        <Nuxt />
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header },
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
      ],
      miniVariant: false,
    }
  }
}
</script>
