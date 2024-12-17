<template>
  <div class="relative">
    <div v-for="(event, index) in events" :key="index" class="flex relative gap-6 items-center mb-12">
      
      <!-- Left Side: Time -->
      <div class="w-24 text-center">
        <p class="text-sm font-medium text-gray-400">{{ event.time }}</p>
      </div>

      <!-- Middle: Dot or Icon -->
      <div class="relative z-10">
        <!-- If status is 'check' render check icon -->
        <div v-if="event.status === 'check'" class="text-emerald-500">
          <!-- Check icon -->
          <Fa6SolidCircleCheck />
        </div>
        <!-- If status is 'cross' render cross icon -->
        <div v-else-if="event.status === 'cross'" class="text-red-500">
          <!-- Cross icon -->
          <Fa6SolidCircleXmark />
        </div>
        <!-- If no status or any other status, render a dot -->
        <div v-else class="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>

      <!-- Right Side: Event Content -->
      <div class="">
        <p class="font-semibold text-gray-900">{{ event.content }}</p>
      </div>

      <!-- Vertical Line Between Events -->
      <div
        v-if="index < events.length - 1"
        class="absolute bottom-0 top-6 left-[127px] w-0.5 h-12 bg-gray-200"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  events: {
    type: Array,
    required: true
  },
});
</script>

<style scoped>
/* 可以根據需要調整樣式 */
</style>
