<template>
    <div class="flex flex-col items-center">
      <!-- 顯示範圍數字 -->
      <div class="flex justify-between mb-2 w-full">
        <span class="text-lg">{{ label }}</span>
        <span class="text-lg">NT ${{ value }} - NT ${{ max }}</span>
      </div>
  
      <!-- 自定義範圍滑桿 -->
      <input
        id="range"
        type="range"
        v-bind="rangeProps"
        v-model="value"
        class="w-full h-2 rounded-full appearance-none cursor-pointer"
        :style="`background: linear-gradient(to right, #3B82F6 ${percentage}%, #E5E7EB ${percentage}%)`"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, computed } from 'vue';
  
  // 定義 props
  const props = defineProps({
    label: {
      type: String,
      default: 'Price Range'
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 900
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  });
  
  // 反應式變數 value
  const value = ref(props.value);
  
  // 這是用來設定範圍滑桿的其他屬性
  const rangeProps = {
    min: props.min,
    max: props.max,
    step: props.step
  };
  
  // 計算百分比
  const percentage = computed(() => ((value.value - props.min) / (props.max - props.min)) * 100);
  </script>
  
  <style scoped>
  /* 使用 Tailwind 進行樣式控制 */
  input[type="range"] {
    @apply w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer;
  }
  
  /* 滑塊樣式 - 針對 Webkit 瀏覽器 */
  input[type="range"]::-webkit-slider-thumb {
    @apply w-6 h-6 bg-white shadow-md rounded-full cursor-pointer;
    -webkit-appearance: none;
  }
  
  /* 滑塊樣式 - 針對 Firefox 瀏覽器 */
  input[type="range"]::-moz-range-thumb {
    @apply w-6 h-6 bg-white shadow-md rounded-full cursor-pointer;
    -moz-appearance: none;
  }
  
  /* 滑塊樣式 - 針對 IE 瀏覽器 */
  input[type="range"]::-ms-thumb {
    @apply w-6 h-6 bg-white shadow-md rounded-full cursor-pointer;
    -ms-appearance: none;
  }
  </style>
  