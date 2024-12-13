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
    class: 'text-5xl font-bold leading-[72px]',
    className: '.awwd-font-size-heading-1',
    style: 'font-size: 60px; line-height: 72px;',
  },
  {
    text: 'Heading 2',
    class: 'text-4xl font-bold leading-[54px]',
    className: '.awwd-font-size-heading-2',
    style: 'font-size: 46px; line-height: 54px;',
  },
];
</script>