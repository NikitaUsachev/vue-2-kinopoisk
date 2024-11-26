<template>
  <div>
    <MoonLoader
      :loading="loading"
    />

    <div
      v-if="!loading"
      class="main grid grid-cols-5
      gap-5 w-8/12 mx-auto bg-black p-10
      cursor-pointer"
    >
      <div
        v-for="film in favoritesFilms"
        :key="film.id"
        @click="goToMovie(film.kinopoiskId)"
      >
        <FilmComponent
          :film="film"
          @update="toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import index, { mapGetters, mapActions } from "vuex";
import MoonLoader from '@/components/SpinnerComponent.vue';
import FilmComponent from "@/components/FilmComponent.vue";

export default {
  components: {
    FilmComponent,
    MoonLoader,
  },
  data() {
    return {
      film: [],
    };
  },
  computed: {
    index() {
      return index
    },
    ...mapGetters({
      favoritesFilms: "favoritesFilms",
      loading: "loading"
    })
  },
  methods: {
    ...mapActions(['getDataFavFilms']),
    toggleFavorite(film) {
      const index = this.favoritesFilms
        .findIndex((item) => item.kinopoiskId === film.kinopoiskId);

      if (index !== -1) {
        this.$store.commit('REMOVE_FAVORITE_FILM', index);
      } else {
        this.$store.commit('ADD_FAVORITE_FILM', film);
      }
    },
    goToMovie(kinopoiskId) {
      this.$router.push(`/movie/${kinopoiskId}`)
    },
  },
  created() {
    this.getDataFavFilms()
  },
};
</script>
