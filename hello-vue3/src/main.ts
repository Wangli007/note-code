import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import service from "./api/axios/service";
import store from './store'

const app = createApp(App)
// app.use(service)
// console.log(app);
// console.log(App);
app.config.globalProperties.myFun = ()=>{
    console.log("测试");
    
}

app.use(router)
app.use(store)
app.mount('#app')
