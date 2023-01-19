import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// 导入vant
import vant from "vant";
import "vant/lib/index.css";
import "@/util/mobile.js";

const app = createApp(App);
app.use(vant);
app.use(router);
app.mount("#app");
