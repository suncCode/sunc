import { createApp } from "vue";
import App from "./App.vue";
import sunc from '@sunc/components';

const app = createApp(App);

app.use(sunc);
console.log("hhh")
app.mount("#app");
