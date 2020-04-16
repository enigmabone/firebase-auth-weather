<template>
  <div>
    <v-card v-if="isLoggedIn" class="pa-4 mx-auto mt-5" width="500">
      <h1 class="mb-5">
        Mortgage Calculator
        <v-icon color="warning" dark @click="runTour">mdi-help-circle</v-icon>
      </h1>
      <v-tour name="testTour" :steps="steps"></v-tour>
      <v-form>
        <v-text-field
          type="text"
          prefix="$"
          v-model="homeValue"
          label="Home Value"
          required
          outlined
          id="v-step-0"
          >{{ homeValue }}</v-text-field
        >
        <v-row align="center">
          <v-col
            ><v-text-field
              prefix="$"
              v-model="downPayment"
              label="Down Payment"
              required
              outlined
              class="v-step-1"
              >{{ downPayment }}</v-text-field
            ></v-col
          >
          <p>or</p>
          <v-col
            ><v-text-field
              type="text"
              v-model="percentDown"
              label="Percent Down"
              suffix="%"
              required
              outlined
              >{{ percentDown }}</v-text-field
            ></v-col
          >
        </v-row>
        <v-select
          v-model="mortgageType"
          :items="items"
          item-text="name"
          item-value="value"
          label="Type of Mortgage"
          required
          outlined
        ></v-select>
        <v-text-field
          type="text"
          v-model="interestRate"
          label="Interest Rate"
          suffix="%"
          required
          outlined
          data-v-step="2"
        ></v-text-field>
        <v-btn dark color="primary" @click="CalcMortgagePayment" data-v-step="3"
          >Calculate Mortgage</v-btn
        >
      </v-form>
      <p class="mt-5">
        Your monthly mortgage payment will be {{ CalcMortgagePayment }}
      </p>
      <router-link to="/secret">Secret Page </router-link>|
      <router-link to="/calc">Calc Page </router-link>|
      <router-link to="/weather">Weather Page</router-link>
    </v-card>
    <v-card v-else width="500" class="mx-auto pa-4 mt-5">
      <h1>Home</h1>
      <p>
        Please <router-link to="/login">Login</router-link> or
        <router-link to="register">Register</router-link> to view the home page
      </p>
    </v-card>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Home",
  data() {
    return {
      isLoggedIn: false,
      homeValue: 200000,
      downPayment: 40000,
      percentDown: 20,
      mortgageType: { name: "15 Year Fixed", term: 15 },
      interestRate: 4.25,
      items: [
        { name: "15 Year Fixed", term: 15 },
        { name: "30 Year Fixed", term: 30 },
      ],
      steps: [
        {
          target: "#v-step-0", // We're using document.querySelector() under the hood
          header: {
            title: "First Tour Step",
          },
          content: `This is my first tour step here`,
          params: {
            placement: "bottom",
          },
        },
        {
          target: ".v-step-1",
          content: "This is my second tour step here",
          params: {
            placement: "left",
          },
        },
        {
          target: '[data-v-step="2"]',
          content: "This is my third tour step here",
          params: {
            placement: "top",
          },
        },
        {
          target: '[data-v-step="3"]',
          content: "This is my fourth tour step here",
          params: {
            placement: "top",
          },
        },
      ],
    };
  },
  methods: {
    runTour() {
      this.$tours["testTour"].start();
    },
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
  computed: {
    CalcMortgagePayment() {
      return Math.floor(
        ((this.homeValue - this.downPayment) *
          (this.interestRate / 100) *
          this.mortgageType.term +
          (this.homeValue - this.downPayment)) /
          this.mortgageType.term /
          12
      );
    },
  },
};
</script>
