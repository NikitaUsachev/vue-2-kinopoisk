<template>
  <div class="overflow-hidden rounded-xl relative">
    <img
      class="mb-5 hover:scale-125 transform duration-200"
      :src="film.posterUrlPreview"
      alt="poster" />
    <h3
      class="text-white text-2xl mb-5 truncate"
    >
      {{ film.nameRu }}
    </h3>
    <p
      class="text-white text-sm font-light mb-2"
    >
      Жанры: {{ genreList() }}
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
    <div
      class="absolute top-0 right-0 flex items-center justify-center w-16 h-16 cursor-pointer"
      @click.stop="addFilmInFav(film)"
    >
      <feather-heart-icon
        :class="film.favorite ? 'text-red-600' : 'text-gray-400'"
        size="32"
        :fill="film.favorite ? 'currentColor' : 'none'"
      />
    </div>
  </div>
</template>

<script>

import { HeartIcon as FeatherHeartIcon } from 'vue-feather-icons';

export default {
  props: {
    film: Object,
  },
  components: {
    FeatherHeartIcon,
  },
  emits: ['update'],
  methods: {
    genreList() {
      return this.film.genres
        .map((el) => el.genre)
        .join(', ');
    },

    ratingColor(rating) {
      if (rating > 7.5) {
        return 'text-yellow-500';
      }
      if (rating > 4.5) {
        return 'text-yellow-400';
      }
      return 'text-red-700';
    },

    addFilmInFav(item) {
      this.$emit('update', item);
    }
  },
};
</script>
