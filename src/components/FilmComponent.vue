<template>
  <div
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.esc="handleClick"
    class="cursor-pointer"
    role="button"
    tabindex="0"
  >
    <img
      class="mb-5 rounded-xl"
      :src="film.posterUrlPreview"
      alt="poster" />
    <h3
      class="text-white text-2xl mb-5"
    >
      {{ film.nameRu }}
    </h3>
    <p
      class="text-white text-sm font-light mb-2"
    >
      Жанры: {{ genreList }}
    </p>
    <p
      class="text-white text-sm font-light mb-2"
    >
      Рейтинг:
      <strong>
            <span
              :class="ratingColor(film.ratingKinopoisk)"
            >
          {{ film.ratingKinopoisk }}
        </span>
      </strong>
    </p>
    <p
      class="text-white text-sm font-light"
    >
      Год: {{ film.year }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    film: Object,
  },
  data() {
    return {
    };
  },
  computed: {
    genreList() {
      return this.film.genres.map((el) => el.genre).join(', ');
    },
  },
  methods: {
    ratingColor(rating) {
      if (rating > 7.5) {
        return 'text-yellow-500';
      }
      if (rating > 4.5) {
        return 'text-yellow-400';
      }
      return 'text-red-700';
    },
    handleClick() {
      alert(this.film.nameRu);
    },
  },
};
</script>
