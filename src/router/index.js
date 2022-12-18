import { createRouter, createWebHashHistory } from "vue-router";
import DetailVue from "../container/Detail.vue";
import HomeVue from "../container/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailVue,
  },
   {
    path: "/:search",
    name: "sendData",
    component: HomeVue,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
