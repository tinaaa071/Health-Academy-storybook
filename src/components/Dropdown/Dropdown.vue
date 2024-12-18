<template>
  <div class="inline-block relative text-left" ref="dropdownRef">
    <!-- 按鈕 -->
    <button
      @click="toggleDropdown"
      type="button"
      class="inline-flex gap-x-2 items-center px-4 py-3 text-sm font-medium text-gray-800 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
    >
      {{ label }}
      <!-- Icon with rotation -->
      <Fa6SolidChevronDown
        class="text-xs"
        :class="{ '-rotate-180': isOpen }"
      />
    </button>

    <!-- 下拉選單 -->
    <div
      v-if="isOpen"
      class="absolute left-0 mt-2 w-56 bg-white rounded-lg border border-gray-100 shadow-lg"
    >
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          class="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
          @click="selectItem(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Dropdown',
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const isOpen = ref(false);
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item) => {
  console.log(`Selected: ${item}`);
  isOpen.value = false;
};

// 關閉選單的函數
const closeDropdown = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

// 註冊事件監聽器
onMounted(() => {
  window.addEventListener('click', closeDropdown);
});

// 移除事件監聽器，防止記憶體洩漏
onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
/* 根據需求添加樣式 */
</style>
