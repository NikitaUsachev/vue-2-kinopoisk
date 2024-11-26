export const favorite = {
  state: {
    films: [],
    loading: null,
    search: "",
  },
  getters: {
    favoriteFilmsCounter(state) {
      return state.films.length;
    },
    favoritesFilms(state) {
      if (state.search) {
        return state.films.filter(
          (item) =>
            item.nameRu &&
            item.nameRu /* Проверка на null и undefined */
              .toLowerCase()
              .indexOf(state.search.toLowerCase()) !== -1
        );
      } else {
        return state.films;
      }
    },
    loading: (state) => state.loading,
  },
  mutations: {
    SET_SEARCH: (state, value) => {
      state.search = value;
    },
    SET_LOADING: (state, value) => {
      state.loading = value;
    },
    ADD_FAVORITE_FILM: (state, value) => {
      state.films.push(value);
    },
    SET_FAVORITE_FILMS: (state, value) => {
      state.films = value;
      localStorage.setItem("favorites", JSON.stringify(value));
    },
    REMOVE_FAVORITE_FILM: (state, index) => {
      state.films.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(state.films));
    },
  },
  /* Запрос данных async / await */
  actions: {
    TOGGLE_TO_FAVORITE: ({state, commit}, film) => {

      const indexFilm = state.films?.findIndex((el) => el.kinopoiskId === film.kinopoiskId)
      if(indexFilm !== -1) {
        commit('REMOVE_FAVORITE_FILM',indexFilm)
      } else {
        commit('ADD_FAVORITE_FILM', film)
      }
    },
    getDataFavFilms({ commit }) {
      commit("SET_LOADING", true);

      setTimeout(() => {
        commit("SET_FAVORITE_FILMS", JSON.parse(localStorage.getItem("favorites")) || []);
        commit("SET_LOADING", false);
      }, 1500);
    },
  },
};
