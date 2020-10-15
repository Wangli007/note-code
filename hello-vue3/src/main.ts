import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import service from "./api/axios/service";
console.log(App.prototype,"1111");

const app = createApp(App)
// app.use(service)
// console.log(app);
// console.log(App);

app.use(router)
app.mount('#app')
