<template>
    <div class="p-4 space-y-8">
      <div>
      <h1 class="mb-4 text-3xl font-bold">
        Font Weight
      </h1>
      <p class="font-light">
        Utilities for controlling the font weight of an element.
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
    text: 'Roboto',
    class: 'font-bold',
    className: 'font-bold',
    style: 'font-size: 60px; line-height: 72px;',
  },
  {
    text: 'Roboto',
    class: 'font-semibold',
    className: 'font-semibold',
    style: 'font-size: 46px; line-height: 54px;',
  },
];
</script>