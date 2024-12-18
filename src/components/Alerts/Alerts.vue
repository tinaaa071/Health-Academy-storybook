<template>
    <div v-if="visible" :class="['flex justify-between items-center shadow-md border', variantClass, sizeClass]">
      <div class="space-y-1">
        <strong class="font-bold">{{ title }}</strong>
        <p class="text-sm">{{ message }}</p>
      </div>
      <button @click="close" class="text-sm">
        <Fa6SolidXmark />
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Alert',
    props: {
      title: {
        type: String,
        default: 'Alert',
      },
      message: {
        type: String,
        default: 'This is an alert message.',
      },
      variant: {
        type: String,
        default: 'info', // 設定預設為 'info'
      },
      size: {
        type: String,
        default: 'lg',
        validator: (value) => ['sm', 'lg'].includes(value),
      },
    },
    data() {
      return {
        visible: true,
      };
    },
    computed: {
      variantClass() {
        const variants = {
          info: 'bg-blue-100 text-blue-800 border-blue-200',
          success: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          error: 'bg-red-100 text-red-800 border-red-200',
          warning: 'bg-amber-100 text-amber-800 border-amber-200',
        };
        // 根據 variant 屬性選擇相應的樣式
        return variants[this.variant] || variants.info; // 預設為 info
      },
      sizeClass() {
        const sizes = {
          lg: 'px-4 py-3.5 text-lg rounded-lg', // 預設尺寸
          sm: 'px-4 py-3 text-sm',     // 較小的尺寸
        };
        return sizes[this.size] || sizes.normal; // 根據 size 屬性選擇相應的大小
      },
    },
    methods: {
      close() {
        this.visible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
  }
  </style>
  