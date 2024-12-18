<template>
  <div class="flex items-center">
    <input
      type="radio"
      :id="id"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      :disabled="disabled"
      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 disabled:border-gray-300 disabled:cursor-not-allowed disabled:ring-0 disabled:opacity-50"
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
  </div>
</template>

<script setup>
defineProps({
  id: String,
  value: String,
  label: String,
  modelValue: String,
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
/* 在這裡可以進一步定義其他禁用狀態的樣式 */
</style>
