<template>
  <div>
    <v-c ard class="pa-4 mx-auto mt-5" width="500">
      <h1 class="mb-5">
        Weather Page
        <v-icon color="warning" dark @click="runTour">mdi-help-circle</v-icon>
      </h1>
      <v-tour name="testTour" :steps="steps"></v-tour>
      <v-form>
        <v-text-field
          type="text"
          label="Search Location"
          v-model="query"
          outlined
          append-icon="mdi-magnify"
          @keypress.enter.prevent="fetchWeather"
          @click:append="clickField"
          id="v-step-0"
        ></v-text-field>
      </v-form>
      <v-card class="pa-4 weather">
        <p class="location v-step-1">{{ weather.name }}</p>
        <p class="date">{{ dateBuilder() }}</p>
        <p class="weather-type">Weather: {{ weather.weather[0].main }}</p>
        <div class="temp-box mx-auto">
          <p class="temp" data-v-step="2">{{ Math.round(weather.main.temp) }}°</p>
        </div>
      </v-card>
    </v-c>
    <div v-if="isClicked">
      <v-btn fixed dark fab bottom right color="primary" @click="unclick">
        <v-icon left>mdi-plus</v-icon>Save
      </v-btn>
      <v-btn fixed dark fab bottom right color="secondary" @click="unclick" class="btn-margin">
        <v-icon left>mdi-cancel</v-icon>Discard
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      api_key: "d28246cc79f240576c6240cd8e18b2dd",
      url_base: "https://api.openweathermap.org/data/2.5/",
      isClicked: false,
      query: "",
      weather: {},
      steps: [
        {
          target: "#v-step-0", // We're using document.querySelector() under the hood
          header: {
            title: "Let's Take The Tour!"
          },
          content: `Please enter a city to see today's weather`,
          params: {
            placement: "bottom"
          }
        },
        {
          target: ".v-step-1",
          content: "The typed in city name and date will appear here",
          params: {
            placement: "top"
          }
        },
        {
          target: '[data-v-step="2"]',
          content: "The city's temperature displays here in degrees Farenheit",
          params: {
            placement: "bottom"
          }
        }
      ]
    };
  },
  methods: {
    clickField() {
      this.isClicked = true;
    },
    unclick() {
      this.isClicked = false;
    },
    fetchWeather() {
      fetch(
        `${this.url_base}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`
      )
        .then(res => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
    },
    runTour() {
      this.$tours["testTour"].start();
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${month} ${date}  ${year}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.weather {
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url("../assets/cold-bg.jpg") center center/cover;
  min-height: 60vh;
  text-align: center;
}
.weather-warm {
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url("../assets/warm-bg.jpg") center center/cover;
  min-height: 60vh;
  text-align: center;
}
.location {
  color: #ffffff;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  margin: 0;
}
.date {
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0;
}
.weather-type {
  color: #ffffff;
  font-size: 1.5rem;
  margin: 1rem 0;
}
.temp {
  color: #ffffff;
  text-shadow: 2px 4px rgba(0, 0, 0, 0.25);
  font-size: 8rem;
  margin: 0;
}
.temp-box {
  box-shadow: 2px 4px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  width: 18rem;
  text-align: center;
}
.v-btn--fab.v-size--default {
  width: 150px;
}
.v-btn--round {
  border-radius: 5px;
}
.btn-margin {
  margin-right: 10rem;
}
</style>
