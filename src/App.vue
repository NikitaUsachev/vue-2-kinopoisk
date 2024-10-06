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

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  color: #fff !important;
}
</style>
