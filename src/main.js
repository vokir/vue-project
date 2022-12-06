import axios from "axios";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/index.scss'

axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origins"] = "*";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = '/baseUrl';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
