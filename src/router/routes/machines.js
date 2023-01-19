import machines from "@/view/machines/index.vue";
import tickets from "@/view/machines/tickets.vue";

export default [
  {
    name: "machines",
    path: "/machines",
    component: machines,
  },
  {
    name: "tickets",
    path: "/machines/tickets",
    component: tickets,
  },
];
