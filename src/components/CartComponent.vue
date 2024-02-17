<template>
  <div class="cart-paint__wrapper">
    <img
      class="cart-paint__img"
      v-bind:src="`https://test-front.framework.team` + props.paint.imageUrl"
      alt=""
    />
    <div
      class="cart-paint__info"
      v-if="Object.keys(authors.authors).length > 0 && Object.keys(locations.location).length > 0"
    >
      <div class="info__name">
        {{ props.paint.name }}
      </div>
      <div class="info__key">
        Author:
        <p class="info__text">
          {{ getAuthor(props.paint.authorId).name }}
        </p>
      </div>
      <div class="info__key">
        Created:
        <p class="info__text">
          {{ props.paint.created }}
        </p>
      </div>
      <div class="info__key">
        Location:
        <p class="info__text">
          {{ getLocations(props.paint.locationId).location }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useAuthorsStore } from '@/store/autors';
import { useLocationsStore } from '@/store/locations';
import { storeToRefs } from 'pinia';

const props = defineProps({ paint: Object });
const authors = useAuthorsStore();
const locations = useLocationsStore();
const { getAuthor } = storeToRefs(authors);
const { getLocations } = storeToRefs(locations);
</script>

<style scoped lang="scss">
.cart-paint__wrapper {
  width: 360px;
  height: 275px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  .cart-paint__img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
  .cart-paint__info {
    background-color: rgba(255, 255, 255, 0.75);
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 0;
    transition: height 0.5s;
    padding: 5px 15px;
    color: $text-color-night;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .info__key {
      display: flex;
      gap: 8px;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
    }
    .info__text {
      font-weight: 300;
    }
    .info__name {
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
    }
  }
  &:hover {
    .cart-paint__info {
      height: 50%;
      transition: height 0.5s;
    }
  }
}
</style>
