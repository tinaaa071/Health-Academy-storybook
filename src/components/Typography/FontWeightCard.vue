<template>
  <div class="p-4 bg-gray-50 rounded-lg border shadow-sm transition-transform duration-300 transform hover:scale-[1.02]">
    <h2 :class="headingClass" class="mb-2">{{ headingText }}</h2>
    <div class="flex gap-24 text-sm font-light text-gray-400">
      <p>Class Name: 
        <br>
        <span class="font-normal text-gray-500">
          {{ className }}
          <button
            class="relative ml-2 text-gray-500 whitespace-nowrap hover:text-gray-800"
            @click="copyToClipboard(className)"
            @mouseenter="showTooltip = true"
            @mouseleave="resetTooltip"
            title="Copy class"
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
        </span>
      </p>
      <p>Style: 
        <br>
        <span class="font-normal text-gray-500">
          {{ style }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  headingText: String,
  headingClass: String,
  className: String,
  style: String,
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
