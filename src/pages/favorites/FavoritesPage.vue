<template>
  <div
    class="text-white p-10 flex justify-center mt-10"
  >
    <MoonLoader
      :loading="loading"
    />


  </div>
</template>
<script>
import MoonLoader from '@/components/SpinnerComponent.vue';

export default {
  components: {
    MoonLoader,
  },
  data() {
    return {
      loading: null,
      film: [],
    };
  },
}
</script>
