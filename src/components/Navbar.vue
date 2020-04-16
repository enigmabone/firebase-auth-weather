<template>
  <div>
    <v-app-bar app color="light-blue darken-4" dark>
      <h1><router-link to="/">Logo Here</router-link></h1>

      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn color="info" v-if="!isLoggedIn">Login </v-btn></router-link
      >
      <router-link to="/register">
        <v-btn color="success" v-if="!isLoggedIn">Register </v-btn>
      </router-link>
      <router-link to="/">
        <v-btn color="secondary" v-if="isLoggedIn" @click="signOut"
          >Logout
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    logout() {
      this.isLoggedIn = !this.isLoggedIn;
    },
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "Login" });
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application a {
  color: #ffffff;
  text-decoration: none;
}
button {
  margin-right: 1rem;
}
</style>
