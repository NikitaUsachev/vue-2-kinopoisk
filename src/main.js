import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Plugins */
import Paginate from 'vuejs-paginate2';
import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

/* Styles */
import './assets/styles/app.css';

// const app = Vue;

Vue.component('VuePaginate', Paginate);
Vue.component('MoonLoader', MoonLoader);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
