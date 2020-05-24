import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login/index.vue";
import Main from "@/views/Main.vue";
import Overview from "@/views/Overview.vue";

Vue.use(VueRouter);
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "overview",
        name: "Overview",
        components: {
          rvContent: Overview
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
