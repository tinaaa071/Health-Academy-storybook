<!-- src/components/Tabs.vue -->
<template>
    <div class="tabs-container">
      <!-- Tabs Header -->
      <div class="flex gap-4 border-b-2 border-gray-200 tabs-header">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="[
            'tab-button px-4 py-4 flex items-center gap-2 transition group',
            activeTab === tab.name
              ? 'border-blue-600 border-b-2 text-blue-600'
              : 'border-transparent border-b-2 text-gray-600 hover:text-blue-600'
          ]"
          @click="selectTab(tab.name)"
        >
          <!-- Display Number -->
          <span
            v-if="tab.number !== undefined"
            :class="[
            'flex justify-center items-center w-6 h-6 text-sm  rounded-full tab-number text-white',
            activeTab === tab.name
              ? 'bg-blue-600'
              : 'bg-gray-400 group-hover:bg-blue-600'
          ]"
          >
            {{ tab.number }}
          </span>
          <!-- Tab Label -->
          {{ tab.label }}
        </button>
      </div>
      <!-- Tabs Content -->
      <div class="p-4 tabs-content">
        <slot :name="activeTab" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    tabs: {
      type: Array,
      required: true,
      // Example:
      // tabs: [
      //   { name: 'tab1', label: 'Tab 1', number: 3 },
      //   { name: 'tab2', label: 'Tab 2', number: 5 },
      // ],
    },
  });
  
  const activeTab = ref(props.tabs[0]?.name);
  
  const selectTab = (tabName) => {
    activeTab.value = tabName;
  };
  </script>
  