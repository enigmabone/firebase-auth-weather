<template>
  <div>
    <v-card class="pa-4 mx-auto mt-5" width="500">
      <h1 class="mb-5">Secret Page</h1>
      <v-form>
        <v-text-field
          prefix="$"
          type="number"
          v-model="homeValue"
          label="Home Value"
          required
          outlined
        />
        <v-row align="center">
          <v-col
            ><v-text-field
              prefix="$"
              type="number"
              v-model="downPayment"
              label="Down Payment"
              required
              outlined
          /></v-col>
          <p>or</p>
          <v-col
            ><v-text-field
              type="number"
              v-model="percentDown"
              label="Percent Down"
              suffix="%"
              required
              outlined
          /></v-col>
        </v-row>
        <v-btn @click.prevent="DownToPercent">Fire</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Secret",
  data() {
    return {
      homeValue: 200000,
      downPayment: 40000,
      percentDown: 20,
    };
  },
  methods: {
    DownToPercent() {
      const x = (this.downPayment / this.homeValue) * 100;
      x === this.percentDown;
      return this.percentDown;
    },
  },
};
</script>

<style lang="scss" scoped></style>
