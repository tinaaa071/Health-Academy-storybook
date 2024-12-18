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
    style: 'font-weight: 700;',
  },
  {
    text: 'Roboto',
    class: 'font-semibold',
    className: 'font-semibold',
    style: 'font-weight: 600;',
  },
  {
    text: 'Roboto',
    class: 'font-medium',
    className: 'font-medium',
    style: 'font-weight: 500;',
  },
  {
    text: 'Roboto',
    class: 'font-normal',
    className: 'font-normal',
    style: 'font-weight: 400;',
  },
  {
    text: 'Roboto',
    class: 'font-light',
    className: 'font-light',
    style: 'font-weight: 300;',
  },
];
</script>