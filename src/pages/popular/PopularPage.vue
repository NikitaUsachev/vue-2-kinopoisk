<template>
  <div>
    <div
      class="main grid grid-cols-5 gap-5 w-8/12 mx-auto bg-black content-center p-10">
      <div
        class="films mb-10 w-56"
        v-for="film in films"
        :key="film.nameRu"
      >
        <FilmComponent
          :film="film"
        />

      </div>
    </div>
  </div>
</template>

<script>
import { getTopFilms } from '@/api/films';
import FilmComponent from '@/components/FilmComponent.vue';

export default {
  components: {
    FilmComponent,
  },
  data() {
    return {
      loading: null,
      films: [],
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

        this.films = items;
        this.total = total;
        // setTimeout(async () => {
        //   this.films = await getTopFilms();
        // }, 3000);
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
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
  },
  computed: {
  },
  async mounted() {
    await this.getData();
  },
};
</script>
