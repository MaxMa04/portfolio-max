import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import jQuery from 'jquery';
import router from './router'
window.jQuery = jQuery;
createApp(App).use(router).mount('#app')
