<template>
    <div
      :class="[
        'overflow-hidden w-full rounded-2xl border border-gray-200',
        size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : ''
      ]"
    >
      <button
        class="flex justify-between items-center p-4 w-full text-left bg-blue-50 transition focus:outline-none hover:bg-gray-200"
        @click="toggle"
      >
        <div class="flex gap-2 items-center">
          <span 
          class="p-2 text-center text-white bg-blue-500 rounded-full"
          :class="{
            'text-xs': size === 'sm',
            'text-sm': size === 'lg',
            }"
          >
            <Fa6Solid1 />
          </span>
          <span 
          class="font-medium text-gray-800"
          :class="{
            'text-sm': size === 'sm',
            'text-base': size === 'lg',
            }"
          >
          {{ title }}
        </span>
        </div>
        <span :class="{'rotate-180': isOpen}" class="text-sm transition transform">
          <Fa6SolidChevronDown />
        </span>
      </button>
      <div
        v-if="isOpen"
        :class="{
          'px-4 py-2 text-sm': size === 'sm',
          'px-4 py-3 text-base': size === 'lg'
        }"
        class="font-medium text-gray-700 bg-white"
      >
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const props = defineProps({
    title: {
      type: String,
      default: "Accordion Title",
    },
    size: {
      type: String,
      default: "lg", // 預設為 medium 尺寸
      validator: (value) => ["sm", "lg"].includes(value), // 限制 size 的值
    },
  });
  const isOpen = ref(false);
  const toggle = () => (isOpen.value = !isOpen.value);
  </script>
  
  <style scoped>
  </style>
  