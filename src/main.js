import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局默认样式表
import "@/assets/less/index.less"

const app =  createApp(App);

app.use(store)
   .use(router);

app.mount('#app')
