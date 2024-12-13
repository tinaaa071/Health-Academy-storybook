<template>
    <div class="flex relative flex-col items-center p-4 gap-2 bg-gray-50 rounded-lg border transition-transform duration-300 transform hover:scale-[1.02]">
      <!-- Icons Block -->
      <div class="p-3">
        <component :is="icon" class="text-xl" />
      </div>
      
      <!-- Token -->
      <p class="text-sm">{{ token }}</p>
      
      <!-- Color Value with Copy Icon -->
      <div class="flex items-center space-x-2">
        <p class="text-sm font-light text-gray-500">{{ name }}</p>
        <button
          class="relative text-gray-500 whitespace-nowrap hover:text-gray-800"
          @click="copyToClipboard(token)"
          @mouseenter="showTooltip = true"
          @mouseleave="resetTooltip"
          title="Copy color"
        >
          <!-- Copy Icon -->
          <Fa6RegularCopy class="text-xs text-gray-400 hover:text-gray-500" />
          <!-- Tooltip -->
          <span
            v-if="showTooltip"
            class="absolute top-full px-2 py-1 mt-1 text-xs text-white bg-gray-800 rounded shadow"
          >
            {{ tooltipText }}
          </span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Props
  defineProps({
    token: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  });
  
  // State for tooltip and its message
  const showTooltip = ref(false);
  const tooltipText = ref("Copy");
  
  // Method to copy text to clipboard
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        tooltipText.value = "Copied!";
      })
      .catch(() => {
        tooltipText.value = "Error";
      });
  }
  
  // Reset tooltip when mouse leaves
  function resetTooltip() {
    showTooltip.value = false;
    tooltipText.value = "Copy";
  }
  </script>
  