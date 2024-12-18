<template>
    <div class="p-4 space-y-8">
      <div>
      <h1 class="mb-4 text-3xl font-bold">
        Corner
      </h1>
      <p class="font-light">
        Use utilities like rounded-sm, rounded, or rounded-lg to apply different border radius sizes to an element.
      </p>
    </div>
    <!-- 使用 v-for 來遍歷色票區塊 -->
    <div class="space-y-4">
      <ShadowCard
      v-for="(heading, index) in headings"
      :key="index"
      :shadowClass="heading.shadow"
      :headingText="heading.text"
      :className="heading.className"
      :style="heading.style"
    />
    </div>
  </div>
</template>


<script setup>
import ShadowCard from './ShadowCard.vue';

const headings = [
  {
    shadow: 'shadow-none',
    text: 'shadow-none',
    className: 'shadow-none',
    style: 'box-shadow: 0 0 #0000;',
  },
  {
    shadow: 'shadow-sm',
    text: 'shadow-sm',
    className: 'shadow-sm',
    style: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);',
  },
  {
    shadow: 'shadow',
    text: 'shadow',
    className: 'shadow',
    style: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
  },
  {
    shadow: 'shadow-md',
    text: 'shadow-md',
    className: 'shadow-md',
    style: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
  },
  {
    shadow: 'shadow-lg',
    text: 'shadow-lg',
    className: 'shadow-lg',
    style: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
  },
  {
    shadow: 'shadow-xl',
    text: 'shadow-xl',
    className: 'shadow-xl',
    style: 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);',
  },
  {
    shadow: 'shadow-2xl',
    text: 'shadow-2xl',
    className: 'shadow-2xl',
    style: 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);',
  },
];
</script>