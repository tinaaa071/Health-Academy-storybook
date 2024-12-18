<template>
    <div class="relative group">
      <slot></slot>
      <div
        :class="[tooltipClasses, 'absolute whitespace-nowrap z-10 px-4 py-2 text-sm text-white bg-gray-800 rounded shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100']"
      >
        {{ text }}
        <!-- 顯示三角形 -->
        <div
            :class="triangleClasses"
            class="absolute w-0 h-0 border-solid"
        ></div>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "top", // 預設為 top
    },
  });
  
  // 根據 position 計算定位樣式
  const tooltipClasses = computed(() => {
    switch (props.position) {
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-3"; // 設定在下方
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-3"; // 設定在左側
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-3"; // 設定在右側
      case "top":
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-3"; // 設定在上方
    }
  });
  
  // 根據 position 計算三角形的樣式
  const triangleClasses = computed(() => {
    switch (props.position) {
      case "bottom":
        return " bottom-full left-1/2 transform -translate-x-1/2 border-b-8 border-l-4 border-r-4 border-transparent border-b-gray-800"; // 底部的三角形
      case "left":
        return "top-1/2 left-full transform -translate-y-1/2 border-l-8 border-t-4 border-b-4 border-transparent border-l-gray-800"; // 左側的三角形
      case "right":
        return "top-1/2 right-full transform -translate-y-1/2 border-r-8 border-t-4 border-b-4 border-transparent border-r-gray-800"; // 右側的三角形
      case "top":
      default:
        return "top-full left-1/2 transform -translate-x-1/2 border-t-8 border-l-4 border-r-4 border-transparent border-t-gray-800"; // 頂部的三角形
    }
  });
  </script>
  
  <style scoped>
  /* 若需要其他自訂樣式，可以補充 */
  </style>
  