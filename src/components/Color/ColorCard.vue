<template>
  <div class="flex relative flex-col items-center p-4 space-y-2 bg-gray-50 rounded-lg border">
    <!-- Color Block -->
    <div class="w-16 h-16 rounded" :style="{ backgroundColor: color }"></div>

    <!-- Color Value with Copy Icon -->
    <div class="flex items-center space-x-2">
      <p class="text-sm font-bold">{{ color }}</p>
      <button
        class="relative text-gray-500 whitespace-nowrap hover:text-gray-800"
        @click="copyToClipboard(color)"
        @mouseenter="showTooltip = true"
        @mouseleave="resetTooltip"
        title="Copy color"
      >
        <!-- Copy Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 16h2a2 2 0 012 2v2a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2a2 2 0 012-2h2" />
        </svg>
        <!-- Tooltip -->
        <span
          v-if="showTooltip"
          class="absolute top-full px-2 py-1 mt-1 text-xs text-white bg-gray-800 rounded shadow"
        >
          {{ tooltipText }}
        </span>
      </button>
    </div>

    <!-- Token -->
    <p class="text-xs text-gray-500">{{ token }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  color: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

// State for tooltip and its message
const showTooltip = ref(false);
const tooltipText = ref("Copy color");

// Method to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      tooltipText.value = "已複製";
    })
    .catch(() => {
      tooltipText.value = "複製失敗";
    });
}

// Reset tooltip when mouse leaves
function resetTooltip() {
  showTooltip.value = false;
  tooltipText.value = "Copy color";
}
</script>
