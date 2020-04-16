<template>
  <div>
    <p v-if="loggedIn" class="welcome">
      Welcome, {{ getUserName }}
      <span class="sign-out" @click="signOut">Sign Out?</span>
    </p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "LoggedIn",
  data() {
    return {
      loggedIn: false,
      name: "",
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  methods: {
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
  computed: {
    getUserName() {
      return firebase.auth().currentUser.email;
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  font-style: italic;
  margin: 0;
}
.sign-out {
  text-decoration: underline;
  color: #006699;
  cursor: pointer;
}
</style>
