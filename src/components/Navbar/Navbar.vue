<template>
    <nav class="px-6 py-3 bg-white shadow-md lg:px-20 md:py-4 md:px-10">
      <div class="flex justify-between items-center mx-auto max-w-7xl">
        <img 
        class="w-28"
        src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/649d90197bcfb131556c51af_logo_fm%201.svg" alt="">
        <!-- Desktop Menu -->
        <div class="hidden items-center space-x-5 lg:flex">
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-blue-600">Breaking News</a></li>
            <li><a href="#" class="hover:text-blue-600">Categories</a></li>
            <li><a href="#" class="hover:text-blue-600">Training Institute</a></li>
            <li><a href="#" class="hover:text-blue-600">Life in Taiwan</a></li>
          </ul>

          <div class="hidden w-0.5 h-6 bg-gray-300 lg:block"></div>
          
          <div class="hidden gap-6 items-center lg:flex">
            <button type="button" class="text-blue-600">
                <Fa6SolidMagnifyingGlass />
            </button>
            <button type="button" class="px-2.5 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                🇺🇸<span class="ml-4 lg:hidden">English</span>
            </button>
            <div class="space-x-2 text-sm font-semibold">
                <button type="button" class="px-4 py-2 text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-100">
                    Log In
                </button>
                <button type="button" class="px-4 py-2 text-white bg-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-700">
                    Sign Up
                </button>
            </div>
          </div>
        </div>
  
        <!-- Hamburger button for mobile -->
        <div class="lg:hidden">
            <button type="button" class="mr-8 text-blue-600">
                <Fa6SolidMagnifyingGlass />
            </button>
            
            <button @click="toggleMenu" >
                <Fa6SolidBars v-if="!isMenuOpen" class="" />
                <Fa6SolidXmark v-else class="text-gray-400" />
            </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="mt-4 lg:hidden">
        <div class="flex flex-col gap-2 text-sm font-semibold">
            <button type="button" class="px-4 py-2 text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-100">
                Log In
            </button>
            <button type="button" class="px-4 py-2 text-white bg-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-700">
                Sign Up
            </button>
        </div>
        
        <ul class="mt-4 space-y-4">
          <li><a href="#" class="hover:text-blue-600">Breaking News</a></li>
          <li><a href="#" class="hover:text-blue-600">Categories</a></li>
          <li><a href="#" class="hover:text-blue-600">Training Institute</a></li>
          <li><a href="#" class="hover:text-blue-600">Life in Taiwan</a></li>
        </ul>

        <button type="button" class="px-2.5 py-1.5 mt-40 w-full text-left rounded-lg border border-gray-200">
            🇺🇸<span class="ml-4 lg:hidden">English</span>
        </button>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 控制菜單開關狀態
  const isMenuOpen = ref(false);
  
  // 切換狀態的方法
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  /* 如果有需要可以添加更多樣式 */
  </style>
  