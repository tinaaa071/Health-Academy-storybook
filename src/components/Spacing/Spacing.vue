<template>
    <div class="p-4 space-y-8">
      <div>
      <h1 class="mb-4 text-3xl font-bold">
        Spacing
      </h1>
      <p class="font-light">
        Customizing the default spacing and sizing scale for your project.
      </p>
    </div>
    <!-- 使用 v-for 來遍歷色票區塊 -->
    <div class="space-y-4">
      <SpacingCard
      v-for="(heading, index) in headings"
      :key="index"
      :spaceClass="heading.space"
      :headingText="heading.text"
      :headingClass="heading.class"
      :className="heading.className"
      :style="heading.style"
    />
    </div>
  </div>
</template>


<script setup>
import SpacingCard from './SpacingCard.vue';

const headings = [
  {
    space: 'h-24',
    text: 'Roboto',
    class: 'font-bold',
    className: 'font-bold',
    style: 'font-size: 60px; line-height: 72px;',
  },
  {
    space: 'h-12',
    text: 'Roboto',
    class: 'font-semibold',
    className: 'font-semibold',
    style: 'font-size: 46px; line-height: 54px;',
  },
];
</script>