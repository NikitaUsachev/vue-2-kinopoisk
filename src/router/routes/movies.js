export default [
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('@/pages/movie/MoviePage.vue'),
  },
];
