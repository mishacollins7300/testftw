<template>
  <div class="header">
    <div class="header--logo">
      <img class="logo-image" src="../assets/image/logo.svg" alt="" />
    </div>
    <div class="header--switch">
      <SwitchThemeComponent></SwitchThemeComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwitchThemeComponent from './SwitchThemeComponent.vue';
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header--logo {
  width: 64px;
  height: 64px;
  .logo-image {
    width: 100%;
  }
}
</style>
