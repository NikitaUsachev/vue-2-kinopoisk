<template>
  <div class="text-white p-10 flex justify-center mt-10">
    <div class="flex items-center gap-10 max-w-5xl w-full">
      <div>
        <img
          :src="film.coverUrl"
          alt="poster"
          class="rounded-lg shadow-lg"
        />
      </div>

      <div
        class="flex flex-col justify-center"
      >
        <h1
          class="text-2xl font-bold mb-4"
        >
          {{ film.nameRu }}
        </h1>
        <p
          class="text-l font-light mb-3"
        >
          Год: {{ film.year }}
        </p>
        <p
          class="text-l font-light mb-3"
        >
          Жанры: {{ genreList() }}
        </p>
        <p
          class="text-l font-light mb-3"
        >
          Рейтинг:
          <span
            :class="ratingColor(film.ratingKinopoisk)"
          >
            {{ film.ratingKinopoisk }}
          </span>
        </p>
        <p class="text-l mt-6">
          {{ film.description }}
        </p>
        <button
          class="border mt-10 py-2 px-2 rounded-full w-56 bg-yellow-500 border-yellow-600"
        >
          Добавить в избранное
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    film: Object,
  },
  emits:['update'],
  methods: {
    genreList() {
      return this.film.genres
        .map((genre) => genre.genre)
        .join(", ");
    },
    ratingColor(rating) {
      if (rating > 7.5) {
        return "text-yellow-500";
      }
      if (rating > 4.5) {
        return "text-yellow-400"
      }
      return "text-red-700";
    },
    addFilmInFav(item) {
      this.$emit('update', item);
    }
  },
};
</script>
