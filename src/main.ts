import { createApp } from "vue";
import App from "./App.vue";
import router from './router'; 
import '@progress/kendo-theme-default/dist/all.css';
import { Grid } from '@progress/kendo-vue-grid';
// Vue.component('Grid', Grid);

// new Vue({
//     el: '#app' //id of the container
// })
const app1 = createApp({});
app1.directive('Grid');

createApp(App).use(router).mount('#app');
