import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Plugins */
import paginate from 'vue-pagination-2';

/* Styles */
import './assets/styles/app.css';

const app = Vue;

app.component('VuePagination', paginate);
app.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
