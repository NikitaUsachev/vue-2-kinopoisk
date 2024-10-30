<template>
  <div class="main w-8/12 mx-auto bg-black p-10">
    <div class="flex w-96 cursor-pointer mb-10">
      <label for="search-film">
        <input
          v-model="inputSearch"
          type="search"
          class="relative m-0 block flex-auto rounded-xl border border-gray-400
                 bg-transparent px-3 py-1 text-base font-normal text-white
                 placeholder-stone-500 focus:border-primary focus:shadow-inset
                 outline-none transition-all w-96 h-10"
          placeholder="Искать"
          id="search-film"
          @keyup.enter="search"
        />
      </label>
    </div>
    <div>
      <MoonLoader
        :loading="loading"
      />

      <div
        v-if="!loading && searchResult">
        <MovieComponent
          v-for="(film, index) in searchedFilms"
          :key="index"
          :film="film"
        />
      </div>
      <div
        v-else-if="!loading && !searchResult">
        <p
          class="text-white">
          Фильм не найден...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MovieComponent from "@/components/MovieComponent.vue";
import MoonLoader from "@/components/SpinnerComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MovieComponent,
    MoonLoader,
  },
  data() {
    return {
      inputSearch: '',
    }
  },
  computed: {
    ...mapGetters(['loading', 'searchedFilms']),
    searchResult() {
      return Array.isArray(this.searchedFilms) && this.searchedFilms.length > 0;
    },
  },
  methods: {
    ...mapActions(['searchFilms']),
    search() {
      if (this.inputSearch.trim()) {
        this.searchFilms(this.inputSearch);
      }
    },
  },
};
</script>
