<template>
    <div class="p-4 space-y-8">
      <div>
      <h1 class="mb-4 text-3xl font-bold">
        Font Size
      </h1>
      <p class="font-light">
        Utilities for controlling the font size of an element.
      </p>
    </div>
    <!-- 使用 v-for 來遍歷色票區塊 -->
    <div class="space-y-4">
      <FontSizeCard
      v-for="(heading, index) in headings"
      :key="index"
      :headingText="heading.text"
      :headingClass="heading.class"
      :className="heading.className"
      :style="heading.style"
    />
    </div>
  </div>
</template>


<script setup>
import FontSizeCard from './FontSizeCard.vue';

const headings = [
  {
    text: 'Heading 1',
    class: 'text-3xl',
    className: 'text-3xl',
    style: 'font-size: 1.875rem; line-height: 2.25rem;',
  },
  {
    text: 'Heading 2',
    class: 'text-2xl',
    className: 'text-2xl',
    style: 'font-size: 1.5rem; line-height: 2rem;',
  },
  {
    text: 'Heading 3',
    class: 'text-xl',
    className: 'text-xl',
    style: 'font-size: 1.25rem; line-height: 1.75rem;',
  },
  {
    text: 'Heading 4',
    class: 'text-lg',
    className: 'text-lg',
    style: 'font-size: 1.125rem; line-height: 1.75rem;',
  },
  {
    text: 'Heading 5',
    class: 'text-base',
    className: 'text-base',
    style: 'font-size: 1rem; line-height: 1.5rem;',
  },
  {
    text: 'Heading 6',
    class: 'text-sm',
    className: 'text-sm',
    style: 'font-size: 0.875rem; line-height: 1.25rem;',
  },
  {
    text: 'Heading 7',
    class: 'text-xs',
    className: 'text-xs',
    style: 'font-size: 0.75rem; line-height: 1rem;',
  },
];
</script>