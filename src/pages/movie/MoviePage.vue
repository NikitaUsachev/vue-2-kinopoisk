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

        console.log('Поиск фильма по его ID:', movieID);

        const data = await getMovie({id: movieID});

        console.log('Полученные данные о фильме:', data);

        if(data) {
          data.favorite = !!this.favoritesFilms
            .find(item => item.kinopoiskId === data.kinopoiskId);
          this.film = data;
          console.log('Информация о фильме: ', this.film)
        }
      } catch (error){
        console.error('Произошла ошибка при получение данных фильма :', error);
      } finally {
        this.loading = false;
      }
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
