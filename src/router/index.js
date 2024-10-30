import Vue from 'vue';
import VueRouter from 'vue-router';
import popular from './routes/popular';
import favorite from './routes/favorite';
import movies from './routes/movies';
import search from './routes/search';

Vue.use(VueRouter);

const routes = [
  ...popular,
  ...favorite,
  ...search,
  ...movies,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
