import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/Overview.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
