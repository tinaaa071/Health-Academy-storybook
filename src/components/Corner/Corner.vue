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
      <CornerCard
      v-for="(heading, index) in headings"
      :key="index"
      :cornerClass="heading.corner"
      :headingText="heading.text"
      :className="heading.className"
      :style="heading.style"
    />
    </div>
  </div>
</template>


<script setup>
import CornerCard from './CornerCard.vue';

const headings = [
  {
    corner: 'rounded-none',
    text: 'rounded-none',
    className: 'rounded-none',
    style: 'border-radius: 0px;',
  },
  {
    corner: 'rounded-sm',
    text: 'rounded-sm',
    className: 'rounded-sm',
    style: 'border-radius: 0.125rem;',
  },
  {
    corner: 'rounded',
    text: 'rounded',
    className: 'rounded',
    style: 'border-radius: 0.25rem;',
  },
  {
    corner: 'rounded-md',
    text: 'rounded-md',
    className: 'rounded-md',
    style: 'border-radius: 0.375rem;',
  },
  {
    corner: 'rounded-lg',
    text: 'rounded-lg',
    className: 'rounded-lg',
    style: 'border-radius: 0.5rem;',
  },
  {
    corner: 'rounded-xl',
    text: 'rounded-xl',
    className: 'rounded-xl',
    style: 'border-radius: 0.75rem;',
  },
  {
    corner: 'rounded-2xl',
    text: 'rounded-2xl',
    className: 'rounded-2xl',
    style: 'border-radius: 1rem;',
  },
  {
    corner: 'rounded-3xl',
    text: 'rounded-3xl',
    className: 'rounded-3xl',
    style: 'border-radius: 1.5rem;',
  },
  {
    corner: 'rounded-full',
    text: 'rounded-full',
    className: 'rounded-full',
    style: 'border-radius: 9999px;',
  },
];
</script>