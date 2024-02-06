<template>
  <button @click="switchTheme" v-bind:class="'switch-button ' + icon"></button>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/theme';
import { ref } from 'vue';

const theme = useThemeStore();
const icon = ref('night');
function switchTheme() {
  theme.changeTheme(theme.getCurrentTheme === 'light' ? 'night' : 'light');
  icon.value = theme.getCurrentTheme === 'light' ? 'night' : 'light';
}
</script>

<style scoped lang="scss">
.switch-button {
  width: 20px;
  height: 20px;
  border: none;
}
.night {
  background: url('../assets/image/switcher-night.svg') no-repeat 100%;
}
.light {
  background: url('../assets/image/switcher-light.svg') no-repeat 100%;
}
</style>
