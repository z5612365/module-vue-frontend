import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//const Koa = require('koa');
const cors = require('@koa/cors');

//const app = new Koa();


createApp(App).use(router)
.use(cors())

.mount('#app')
