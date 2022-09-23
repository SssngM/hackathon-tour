import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import SearchResultsView from "../views/SearchResultsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:id/detail",
    name: "detail",
    component: DetailView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchResultsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
