<template>
  <div id="root" v-bind:data-theme="currTheme">
    <HomePage />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/theme';
import { ref } from 'vue';
import { usePaintingsStore } from '@/store/paintings';
import { useLocationsStore } from '@/store/locations';
import { useAuthorsStore } from '@/store/autors';
import HomePage from './views/HomePage.vue';

const theme = useThemeStore();
const currTheme = ref('light');
theme.$subscribe(() => {
  currTheme.value = theme.getCurrentTheme;
});

const paintings = usePaintingsStore();
const locations = useLocationsStore();
const authors = useAuthorsStore();

paintings.setPaintings();
locations.setLocation();
authors.setAuthors();
</script>
<style lang="scss">
body {
  margin: 0;
}
#root {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
  p {
    margin: 0;
  }
}
</style>
