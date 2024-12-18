<template>
    <div>
      <!-- Trigger Button -->
      <button
        class="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        @click="openModal"
      >
        Open Modal
      </button>
  
      <!-- Modal Overlay -->
      <div
        v-if="isOpen"
        class="flex fixed inset-0 z-50 flex-col justify-center items-center bg-black bg-opacity-30 backdrop-blur-lg"
        @click.self="closeModal"
      >
        <div class="overflow-hidden w-1/2 rounded-2xl shadow-lg">
            <!-- Modal Header -->
            <div class="flex justify-between items-center px-6 py-4 w-full text-white bg-blue-600">
                <h3 class="font-semibold">{{ title }}</h3>
                <button
                class="text-white hover:text-gray-200"
                @click="closeModal"
                aria-label="Close"
                >
                <Fa6SolidXmark />
                </button>
            </div>
            
            <!-- Modal Content -->
            <div
            class="p-6 w-full bg-white transition-transform transform"
            :class="transitionClasses"
            >
            
            <!-- Modal Body -->
            <div class="text-center">
                <slot>
                    <h4 class="mb-3 text-lg font-semibold">
                        This is a modal
                    </h4>
                    <p class="mb-8 text-sm font-medium text-gray-500">
                        Please enter content here.
                    </p>
                </slot>
            </div>
            <!-- Modal Footer -->
            <div class="mt-4 text-center">
                <button
                class="px-8 py-2 text-white bg-gray-400 rounded-lg hover:bg-gray-500"
                @click="closeModal"
                >
                Cancel
                </button>
                <button
                class="px-8 py-2 ml-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                @click="$emit('confirm')"
                >
                Confirm
                </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isOpen = ref(false); // Modal visibility state
  
  const openModal = () => {
    isOpen.value = true;
  };
  
  const closeModal = () => {
    isOpen.value = false;
  };
  
  // Props for customization
  const props = defineProps({
    title: { type: String, default: "Modal Title" },
  });
  
  const emit = defineEmits(["confirm"]);
  </script>
  