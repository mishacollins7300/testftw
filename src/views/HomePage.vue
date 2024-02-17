<template>
  <div class="wrapper">
    <HeaderComponent />
    <GridComponent>
      <div v-for="painting in paints" v-bind:key="painting.id">
        <CartComponent :paint="painting" />
      </div>
    </GridComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePaintingsStore } from '@/store/paintings';
import HeaderComponent from '../components/HeaderComponent.vue';
import GridComponent from '../components/GridComponent.vue';
import CartComponent from '../components/CartComponent.vue';

const paintings = usePaintingsStore();
const paints = ref({});
paintings.$subscribe(() => {
  paints.value = paintings.getAllPaintings;
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
