<template>
  <div class="wrap-content">
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

<style scoped>
.wrap-content {
  width: 1120px;
  min-width: 280px;
  margin: 0 auto;
}
</style>
