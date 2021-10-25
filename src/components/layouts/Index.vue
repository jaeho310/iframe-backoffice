<template>
  <v-app>
    <CoreHeader />
    <CoreView />
  </v-app>
</template>
<script>

import CoreHeader from '@/components/layouts/Header.vue';
import CoreView from '@/components/layouts/View.vue';
export default {
  components: {
    CoreHeader,
    CoreView
  },
}
</script>
<style lang="">

</style>