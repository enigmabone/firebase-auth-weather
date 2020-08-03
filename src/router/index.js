import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/secret",
    name: "Secret",
    component: () =>
      import(/* webpackChunkName: "secret" */ "../views/Secret.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/calc",
    name: "Calc",
    component: () => import(/* webpackChunkName: "calc" */ "../views/Calc.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () =>
      import(/* webpackChunkName: "weather" */ "../views/Weather.vue"),
  },
  {
    path: "/example-tour",
    name: "ExampleTour",
    component: () =>
      import(/* webpackChunkName: "example-tour" */ "../views/ExampleTour.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
