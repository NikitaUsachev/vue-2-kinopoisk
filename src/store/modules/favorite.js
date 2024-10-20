export const favorite = {
  /* Первоначальное состояние  */
  state: {
    films: [],
    loading: null,
  },
  /* computed */
  getters: {
    favoriteFilmsCounter (state) {
      return state.films.length;
    },
    favoritesFilms: (state) => state.films,
    loading: (state) => state.loading
  },
  /* Здесь изменять state */
  mutations: {
    SET_LOADING: (state, value) => {
      state.loading = value
    },
    ADD_FAVORITE_FILM: (state, value) => {
      state.films.push(value);
    },
    SET_FAVORITE_FILMS: (state, value) => {
      state.favoritesFilms = value;

      localStorage.setItem('favorites', JSON.stringify(value));
    },
    REMOVE_FAVORITE_FILM: (state, index) => {
      state.films.splice(index, 1);
    }
  },
  /* Запрос данных async / await */
  actions: {
    getDataFavFilms({ commit }) {
      console.log(123);
      commit('SET_LOADING', true)

      setTimeout(() => {
        commit('SET_FAVORITE_FILMS', JSON.parse(localStorage.getItem('favorites')) || [])
        commit('SET_LOADING', false)
      }, 1500);
    }
  },
};
