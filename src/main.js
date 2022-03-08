import "bootstrap/dist/css/bootstrap.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"; //auytomatically import file named index



createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js";