<template>
  <div
    class="text-white p-10"
  >
    <MoonLoader
      :loading="loading"
    />

    <div
      v-if="!loading && film"
    >
      <MovieComponent
        :film="film"
        @update="toggleFavorite"
      />
    </div>

  </div>
</template>
<script>
import { getMovie } from "@/api/films";
import { mapActions, mapGetters, mapMutations } from "vuex";
import MoonLoader from "@/components/SpinnerComponent.vue";
import MovieComponent from "@/components/MovieComponent.vue";

export default {
  components: {
    MoonLoader,
    MovieComponent,
  },
  data() {
    return {
      loading: true,
      film: null,
      favoritesFilms: JSON.parse(localStorage.getItem('favorites')) || [],
    }
  },
  methods: {
    ...mapMutations({
      SET_FAVORITES_FILMS: "SET_FAVORITE_FILMS",
      ADD_FAVORITE_FILM: "ADD_FAVORITE_FILM",
      REMOVE_FAVORITE_FILM: "REMOVE_FAVORITE_FILM",
    }),
    ...mapActions({
      TOGGLE_TO_FAVORITE: "TOGGLE_TO_FAVORITE",
    }),
    async getData() {
      try {
        this.loading = true;
        const movieID = this.$route.params.id;

        if(!movieID){
          console.error('Не приходит ID фильма');
          return;
        }
        const data = await getMovie({id: movieID});

        if(data) {
          data.favorite = !!this.favoritesFilms
            .find(item => item.kinopoiskId === data.kinopoiskId);
          this.film = data;
        }
      } catch (error){
        console.error('Произошла ошибка при получение данных фильма :', error);
      } finally {
        this.loading = false;
      }
    },
    toggleFavorite(item) {
      this.TOGGLE_TO_FAVORITE(item)
    /* Меняет состояние кнопки */
      this.film.favorite = !this.film.favorite;

      localStorage.setItem('favorites', JSON.stringify(this.favoritesFilms));
    },
  },
  async mounted() {
    await this.getData();
  },
}
</script>

<style>

</style>
