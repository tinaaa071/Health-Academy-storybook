<!-- src/components/Checkbox.vue -->
<template>
    <label :for="id" class="inline-flex items-center space-x-2">
      <input
        :id="id"
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="handleChange"
        class="mt-0.5 text-blue-600 rounded border-gray-300 shrink-0 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="{
        'text-white': disabled && modelValue !== value,   // 禁用且未選中，背景為白色
        'text-blue-200': disabled && modelValue === value   // 禁用且已選中，背景為 blue-200
      }"
      />
      <label
      :for="id"
      class="ml-2"
      :class="{
        'cursor-not-allowed': disabled,
        'text-gray-400': disabled,
      }"
    >
      {{ label }}
    </label>
    </label>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue';
  
  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:checked']);
  
  const handleChange = (event) => {
    if (!props.disabled) {
      emit('update:checked', event.target.checked);
    }
  };
  
  // Watch for changes in the `indeterminate` prop and apply them to the checkbox input
  watch(() => props.indeterminate, (newValue) => {
    const checkbox = document.getElementById(props.id);
    if (checkbox) {
      checkbox.indeterminate = newValue;
    }
  });
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  