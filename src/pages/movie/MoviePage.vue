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
import MoonLoader from "@/components/SpinnerComponent.vue";
import MovieComponent from "@/components/MovieComponent.vue";

export default {
  components: {
    MoonLoader,
    MovieComponent,
  },
  data(){
    return{
      loading: true,
      film: null,
      favoritesFilms: JSON.parse(localStorage.getItem('favorites')) || [],
    }
  },
  methods: {
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
      if (this.favoritesFilms.find((el) => el.kinopoiskId === item.kinopoiskId)) {
        const index = this.favoritesFilms.findIndex(el => el.kinopoiskId === item.kinopoiskId);

        this.favoritesFilms.splice(index, 1);
      } else {
        const obj = { ...item };

        obj.favorite = true;

        this.favoritesFilms.push(obj);
      }

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



<!--

1 =
Обустроить страницу,
добавить запрос,
поправить лоадер,
Смотреть на Popular page !,
пагинация.

-->
