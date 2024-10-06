<template>
  <div>
    <MoonLoader
      :loading="loading"
    />

    <div
      v-if="!loading"
      class="main grid grid-cols-5
      gap-5 w-8/12 mx-auto bg-black
      content-center p-10
      cursor-pointer"
    >
      <div
        class="films mb-10 w-56"
        v-for="(film, index) in films"
        :key="film.nameRu"
        role="button"
        :tabindex="index"
        @click="goToMovie(film.kinopoiskId)"
      >
        <FilmComponent
          :film="film"
          @update="toggleFavorite"
        />
      </div>
      <div class="mt-6 text-white flex items-center gap-2">
        <VuePagination
          v-model="page"
          :per-page="limit"
          :records="total"
          @paginate="getData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getTopFilms } from '@/api/films';
import FilmComponent from '@/components/FilmComponent.vue';
import MoonLoader from '@/components/SpinnerComponent.vue';

export default {
  components: {
    FilmComponent,
    MoonLoader,
  },
  data() {
    return {
      loading: null,
      films: [],
      favoritesFilms: JSON.parse(localStorage.getItem('favorites')) || [],
      limit: 20,
      page: 1,
      total: 0,
    };
  },
  methods: {
    async getData() {
      try {
        this.loading = true;

        const payload = {
          type: 'TOP_250_MOVIES',
          limit: this.limit,
          page: this.page,
        };

        const { items, total } = await getTopFilms(payload);

        if (items.length) {
          items.forEach((el) => {
            el.favorite = false;

            const exist = this.favoritesFilms.find(item => item.kinopoiskId === el.kinopoiskId);

            if (exist) {
              el.favorite = true;
            } else {
              el.favorite = false;
            }
          });
        }
        this.films = items;
        this.total = total;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    toggleFavorite(item) {
      /* Находим элемент в избранном */
      if (this.favoritesFilms.find((el) => el.kinopoiskId === item.kinopoiskId)) {
        const index = this.favoritesFilms.findIndex(el => el.kinopoiskId === item.kinopoiskId);

        this.favoritesFilms.splice(index, 1);
      } else {
        const obj = { ...item };

        obj.favorite = true;

        this.favoritesFilms.push(obj);
      }

      /* Находим элемент в нашем массивe и меняем favorite */
      const idx = this.films.findIndex((el) => el === item);

      this.films[idx].favorite = !this.films[idx].favorite

      /* Сохраняем состояние */
      localStorage.setItem('favorites', JSON.stringify(this.favoritesFilms));
    },
    goToMovie(kinopoiskId) {
      this.$router.push(`/movie/${kinopoiskId}`);
    },
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style scoped>
:deep(.VuePagination__pagination) {
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 10px;
}
</style>
