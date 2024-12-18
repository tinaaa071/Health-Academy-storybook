<template>
    <div class="relative">
      <label v-if="label" :for="id" class="block mb-2 text-sm font-medium text-gray-500">
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </label>
      <div class="relative">
        <input
          :id="id"
          :type="type"
          :placeholder="placeholder"
          :required="required"
          :disabled="disabled"
          :class="[
            'block w-full px-4 py-3.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300 placeholder:text-gray-400 text-sm',
            {
              'bg-gray-50 cursor-not-allowed': disabled,
              'border-gray-300': !hasFeedback,
              'border-red-500 border-2': hasFeedback,
              'pl-10': icon, // Add left padding when there's an icon
            }
          ]"
        />
        <!-- Icon slot on the left side of the input -->
        <div v-if="icon" class="flex absolute inset-y-0 left-0.5 items-center pl-3 text-sm pointer-events-none">
          <Fa6SolidPhone />
        </div>
      </div>
      <div v-if="feedbackMessage" class="mt-1 text-sm text-red-500">
        <span>{{ feedbackMessage }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: { type: String, required: true },
    label: { type: String, required: false },
    type: { type: String, default: 'text' },
    placeholder: { type: String, required: false },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    feedbackMessage: { type: String, required: false },
    hasFeedback: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
  });
  </script>
  
  <style scoped>
  /* Add custom styling here if necessary */
  </style>
  