export const favorite = {
  /* Первоначальное состояние  */
  state: {
    favoritesFilms: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  /* computed */
  getters: {
  },
  /* Здесь изменять state */
  mutations: {
  },
  /* Запрос данных async / await */
  actions: {
  },
};
