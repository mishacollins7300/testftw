<template>
  <div class="header">
    <div class="header--switch">
      <SwitchThemeComponent></SwitchThemeComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwitchThemeComponent from './SwitchThemeComponent.vue';
</script>

<style scoped>
.header {
  width: 100%;
}
</style>
