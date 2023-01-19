import { createRouter, createWebHashHistory } from "vue-router";
import machinesRoutes from "./routes/machines.js";
import notFoundRoutes from "./routes/notFound.js";

const routes = [
  {
    name: "index",
    path: "/",
    redirect: "/machine",
  },
  ...machinesRoutes,
  ...notFoundRoutes,
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
