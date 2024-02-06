<template>
  <div class="header">
    <div class="header--switch">
      <button @click="switchTheme" class="switch-button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/theme';

const theme = useThemeStore();
function switchTheme() {
  theme.changeTheme(theme.getCurrentTheme === 'light' ? 'night' : 'light');
}
</script>

<style scoped>
.header {
  width: 100%;
}
.switch-button {
  width: 20px;
  height: 20px;
  background: url('../assets/image/switcher-ligth.svg') no-repeat 100%;
  border: none;
}
</style>
