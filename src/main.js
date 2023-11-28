import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Gstore from './store'
import 'nprogress/nprogress.css'
import "@/assets/styles/main.css";

createApp(App).use(router).provide('Gstore',Gstore).mount('#app')
