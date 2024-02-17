<template>
  <div class="grid-wrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.grid-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 360px);
  gap: 20px;
}
</style>
