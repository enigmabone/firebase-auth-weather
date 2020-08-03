<template>
  <div>
    <h1 class="mb-5">
      Tour Example Page
      <v-icon color="warning" dark @click="runTour">mdi-help-circle</v-icon>
    </h1>
    <v-tour name="testTour" :steps="steps"></v-tour>
    <v-row>
      <v-col>
        <v-card class="pa-6" id="v-step-0">
          <h3>Hello there!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio aspernatur quas modi sunt culpa, debitis, nisi autem fuga nam consequuntur, eligendi nihil magni reprehenderit consequatur?</p>
          <v-btn color="success">Action</v-btn>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-6" id="v-step-1">
          <h3>Hello there!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio aspernatur quas modi sunt culpa, debitis, nisi autem fuga nam consequuntur, eligendi nihil magni reprehenderit consequatur?</p>
          <v-btn color="success">Action</v-btn>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-6" id="v-step-2">
          <h3>Hello there!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio aspernatur quas modi sunt culpa, debitis, nisi autem fuga nam consequuntur, eligendi nihil magni reprehenderit consequatur?</p>
          <v-btn color="success">Action</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <div class="section-one">
        <h1 id="v-step-3">Full Width Section</h1>
        <p
          id="v-step-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit ipsa aut, ullam aperiam quis culpa voluptas explicabo minima! Culpa, officiis dolores. Provident, quia quis!</p>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ExampleTour",
  data() {
    return {
      steps: [
        {
          target: "#v-step-0", // We're using document.querySelector() under the hood
          header: {
            title: "First Tour Step"
          },
          content: `This is my first tour step here`,
          params: {
            placement: "top",
            highlight: true
          }
        },
        {
          target: "#v-step-1",
          content: "This is my second tour step here",
          params: {
            placement: "top",
            highlight: true
          }
        },
        {
          target: "#v-step-2",
          content: "This is my third tour step here",
          params: {
            placement: "right",
            highlight: true
          }
        },
        {
          target: "#v-step-3",
          content: "This is my fourth tour step here",
          params: {
            placement: "bottom",
            highlight: true
          }
        },
        {
          target: "#v-step-4",
          content: "This is my final tour step here",
          params: {
            placement: "bottom",
            highlight: true
          }
        }
      ]
    };
  },
  methods: {
    runTour() {
      this.$tours["testTour"].start();
    }
  }
};
</script>

<style lang="scss" scoped>
.section-one {
  background: #cccbcb;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}
.v-tour__target--highlighted {
  box-shadow: 0 0 0 99999px rgba(32, 32, 32, 0.4);
}
</style>