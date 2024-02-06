<template>
  <div id="root" v-bind:data-theme="currTheme">
    <HomePage />
    <p>{{ currTheme }}</p>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/theme';
import { ref, onMounted } from 'vue';
// import './style/colors.scss';
import HomePage from './views/HomePage.vue';

const theme = useThemeStore();
const currTheme = ref('light');
theme.$subscribe((mutation, state) => {
  currTheme.value = theme.getCurrentTheme;
});
</script>
<style lang="scss">
@import 'style/theme';
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
