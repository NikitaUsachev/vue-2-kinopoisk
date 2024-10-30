import { getSearchFilms } from "@/api/films";
import logInIcon from "vue-feather-icons/icons/LogInIcon";

export const search = {
  state: {
    search: '',
    loading: false,
    searchedFilms: []
  },
  getters: {
    loadingSearch(state) {
      return state.loading;
    },
    searchedFilms(state) {
      return state.searchedFilms;
    }
  },
  mutations: {
    SET_SEARCH(state, value) {
      state.search = value;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_SEARCH_FILMS(state, films) {
      state.searchedFilms = films;
    },
  },
  actions: {
    async searchFilms({ commit }, inputSearch) {
      if (!inputSearch) return;
      commit('SET_LOADING', true);
      try {
        const response = await getSearchFilms({ search: inputSearch, page: 1 });
        const films = response.films;
        commit('SET_SEARCH_FILMS', films);
      } catch (err) {
        console.error("Ошибка при поиске фильмов:", err);
      } finally {
        commit('SET_LOADING', false);
      }
    }
  }
};
