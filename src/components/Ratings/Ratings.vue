<template>
    <div class="flex items-center">
      <template v-for="star in totalStars" :key="star">
        <!-- 星星懸停顯示為黃色，點擊後保持顯示 -->
        <Fa6SolidStar 
          class="cursor-pointer"
          :class="{
            'text-orange-300': star <= hoverRating || star <= rating,
            'text-gray-300': star > hoverRating && star > rating
          }"
          @mouseover="hoverRating = star" 
          @mouseleave="hoverRating = 0" 
          @click="rating = star"
        />
      </template>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    totalStars: {
      type: Number,
      default: 5
    }
  });
  
  // Reactive variable to manage the hover effect
  const hoverRating = ref(0);
  </script>
  
  <style scoped>
  /* Scoped styles, if needed */
  </style>
  