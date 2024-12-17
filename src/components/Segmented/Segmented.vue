<!-- src/components/Tabs.vue -->
<template>
    <div class="tabs-container">
      <!-- Tabs Header -->
      <div class="flex gap-2 p-1.5 bg-gray-100 rounded-lg border-gray-300 tabs-header w-fit">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="[
            'tab-button px-4 py-2 rounded-md transition flex gap-2 items-center',
            activeTab === tab.name
              ? 'bg-blue-500 text-white'
              : 'text-gray-400 hover:bg-gray-200'
          ]"
          @click="selectTab(tab.name)"
        >
          <!-- Display Icon -->
          <component
            :is="tab.icon"
            v-if="tab.icon"
            :class="[
              'w-5 h-5',
              activeTab === tab.name ? 'text-white' : 'text-gray-400'
            ]"
          />
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
      //   { name: 'tab1', label: 'Tab 1', icon: 'fa6-solid-list' },
      //   { name: 'tab2', label: 'Tab 2', icon: 'fa6-solid-star' },
      // ],
    },
  });
  
  const activeTab = ref(props.tabs[0]?.name);
  
  const selectTab = (tabName) => {
    activeTab.value = tabName;
  };
  </script>
  