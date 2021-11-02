import { createApp } from "vue"; // 在页面引入vue
import App from "./App.vue"; // 引入自定义组件
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
