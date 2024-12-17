<template>
    <div class="flex items-center">
      <div v-for="(step, index) in steps" :key="index" class="flex items-center">
        <!-- Step Circle and Label Container -->
        <div class="flex flex-col items-center">
          <!-- Step Circle -->
          <div
            :class="[
              'w-8 h-8 flex items-center justify-center rounded-full font-semibold',
              index < currentStep
                ? 'bg-emerald-400 text-white border-emerald-400'   /* 已完成步驟為綠色 */
                : index === currentStep
                ? 'bg-orange-400 text-white border-orange-400' /* 當前步驟為橘色 */
                : 'bg-gray-200 text-gray-400 border-gray-200'  /* 未完成步驟為灰色 */
            ]"
          >
            <template v-if="index < currentStep">
              <!-- 已完成步驟顯示打勾 -->
              <Fa6SolidCheck />
            </template>
            <template v-else>
              <!-- 顯示步驟索引（+1） -->
              {{ index + 1 }}
            </template>
          </div>
  
          <!-- Step Label -->
          <div
            v-if="step.label"
            class="mt-2 text-sm text-gray-900"
          >
            {{ step.label }}
          </div>
        </div>
  
        <!-- Step Line (向上移動的水平線) -->
        <div
          v-if="index < steps.length - 1"
          class="w-16 h-0.5 bg-gray-200 mt-[-24px]"
          :class="[
            index < currentStep
              ? 'bg-green-500'
              : 'bg-gray-200'
          ]"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    steps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      default: 0,
    },
  });
  </script>
  