<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from '@/components/core/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  },
};
</script>
<style>
  html { overflow-y: auto }
</style>
