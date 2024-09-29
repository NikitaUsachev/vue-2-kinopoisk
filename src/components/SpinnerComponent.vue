<template>
  <div
    v-if="loading"
    class="flex justify-center items-center min-h-screen">
    <MoonLoader
      :loading="loading"
      color="#fff"
      size="60px" />
  </div>
</template>

<script>
import MoonLoader from 'vue-spinner/src/MoonLoader.vue';

export default {
  components: {
    MoonLoader,
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
