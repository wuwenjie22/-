import error from "@/view/notFound/index.vue";

export default [
  {
    name: "notFound",
    path: "/notFound",
    component: error,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound",
    hidden: true,
  },
];
