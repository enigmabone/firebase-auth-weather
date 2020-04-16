<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <v-card class="pa-4 mx-auto mt-5" width="500">
      <h1>Register</h1>
      <v-form @submit.prevent="register">
        <v-text-field
          type="text"
          v-model="name"
          label="Name"
          required
        ></v-text-field>
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

        <v-btn type="submit" color="success">Register</v-btn>
        <p class="login mt-5">
          Already have an account?
          <router-link to="/login">Login here</router-link>
        </p>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Register",
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
    async register() {
      try {
        const registerUser = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(registerUser);
        this.$router.replace({ name: "Secret" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
.login {
  font-style: italic;
}
</style>
