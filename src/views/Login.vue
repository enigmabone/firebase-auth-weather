<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <v-card class="pa-4 mx-auto mt-5" width="500">
      <h1>Login</h1>
      <v-form @submit.prevent="login">
        <v-text-field
          type="email"
          v-model="email"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          :append-icon="seePassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="seePassword = !seePassword"
          :type="seePassword ? 'text' : 'password'"
          required
        ></v-text-field>
        <v-btn type="submit" color="info">Login</v-btn>
        <p class="register mt-5">
          Need to create an account?
          <router-link to="/register">Register here</router-link>
        </p>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      seePassword: "",
    };
  },
  methods: {
    async login() {
      try {
        const loginUser = firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(loginUser);
        this.$router.replace({ name: "Secret" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.register {
  font-style: italic;
}
</style>
