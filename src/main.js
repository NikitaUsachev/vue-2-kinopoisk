import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Plugins */
import Paginate from 'vue-pagination-2';
import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

/* Styles */
import './assets/styles/app.css';

const app = Vue;

app.component('VuePagination', Paginate);
app.component('MoonLoader', MoonLoader);
app.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
