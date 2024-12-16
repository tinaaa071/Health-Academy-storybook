<template>
    <nav aria-label="Breadcrumb">
      <ol class="flex space-x-4 text-gray-700">
        <li v-for="(item, index) in items" :key="index" class="flex items-center cursor-pointer group">
        <!-- Combine icon and router-link in one item -->
        <template v-if="index === 0">
          <span class="mr-2">
            <Fa6SolidHouse class="w-4 h-4 text-gray-600 group-hover:text-blue-500" />
          </span>
        </template>
        <router-link
          v-if="item.href"
          :to="item.href"
          :class="{'font-bold': index === items.length - 1}"
          class="mr-4 group-hover:text-blue-500"
        >
          {{ item.label }}
        </router-link>
        <span
          v-else
          :class="{'font-semibold': index === items.length - 1}"
          class="mr-4 text-gray-400 cursor-default"
        >
          {{ item.label }}
        </span>
        <span v-if="index < items.length - 1" class="">/</span>
      </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  defineProps({
    items: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0
    }
  })
  </script>
  
  <style scoped>
  /* Optional: Add custom styles if needed */
  </style>
  