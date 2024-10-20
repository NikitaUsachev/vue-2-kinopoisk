<template>
  <div class="bg-black min-h-screen">
    <TheHeader/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    TheHeader,
  },
  methods: {
    ...mapActions({
      getDataFavoritesFilms: 'getDataFavFilms',
    })
  },
  mounted() {
    this.getDataFavoritesFilms();
  },
};
</script>

<style>
body {
  color: #fff !important;
}
</style>
