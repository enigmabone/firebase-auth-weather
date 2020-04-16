<template>
  <v-app>
    <Navbar />

    <v-content>
      <v-container>
        <LoggedIn />
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import LoggedIn from "@/components/LoggedIn.vue";
export default {
  name: "App",

  components: {
    Navbar,
    LoggedIn,
  },

  data: () => ({
    //
  }),
};
</script>
