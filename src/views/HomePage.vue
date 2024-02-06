<template>
  <div class="wrapper">
    <HeaderComponent />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const props = defineProps({
  theme: String,
});
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 1336px;
  margin: 0 auto;
  padding: 35px 123px 97px;
  @media (max-width: $desktop) {
    padding: 35px 42px 97px 42px;
  }
  @media (max-width: $tablet) {
    padding: 35px 35px 97px 35px;
  }
  @media (max-width: $phone) {
    padding: 25px 20px 97px 20px;
  }
}
</style>
