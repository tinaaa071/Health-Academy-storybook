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
    shadow: 'shadow-sm',
    text: 'shadow-sm',
    className: 'font-bold',
    style: 'font-size: 60px; line-height: 72px;',
  },
  {
    shadow: 'shadow',
    text: 'shadow',
    className: 'font-bold',
    style: 'font-size: 60px; line-height: 72px;',
  },
  {
    shadow: 'shadow-md',
    text: 'shadow-md',
    className: 'font-semibold',
    style: 'font-size: 46px; line-height: 54px;',
  },
  {
    shadow: 'shadow-lg',
    text: 'shadow-lg',
    className: 'font-semibold',
    style: 'font-size: 46px; line-height: 54px;',
  },
  {
    shadow: 'shadow-xl',
    text: 'shadow-xl',
    className: 'font-semibold',
    style: 'font-size: 46px; line-height: 54px;',
  },
];
</script>