import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import firebase from "firebase/app";
import VueTour from "vue-tour";
import "vue-tour/dist/vue-tour.css";

Vue.use(VueTour);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlT68S5uMsrrZkUDRhtrZs91nh4thvCuM",
  authDomain: "fir-auth-80dda.firebaseapp.com",
  databaseURL: "https://fir-auth-80dda.firebaseio.com",
  projectId: "fir-auth-80dda",
  storageBucket: "fir-auth-80dda.appspot.com",
  messagingSenderId: "822067962371",
  appId: "1:822067962371:web:e44d7135fd3992db436436",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
