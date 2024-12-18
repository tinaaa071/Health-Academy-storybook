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
    space: 'h-20',
    text: 'Spacing-20',
    class: 'font-bold',
    className: 'spacing-20',
    style: '5rem',
  },
  {
    space: 'h-16',
    text: 'Spacing-16',
    class: 'font-bold',
    className: 'spacing-16',
    style: '4rem',
  },
  {
    space: 'h-14',
    text: 'Spacing-14',
    class: 'font-bold',
    className: 'spacing-14',
    style: '3.5rem',
  },
  {
    space: 'h-12',
    text: 'Spacing-12',
    class: 'font-bold',
    className: 'spacing-12',
    style: '3rem',
  },
  {
    space: 'h-10',
    text: 'Spacing-10',
    class: 'font-bold',
    className: 'spacing-10',
    style: '2.5rem',
  },
  {
    space: 'h-8',
    text: 'Spacing-8',
    class: 'font-bold',
    className: 'spacing-8',
    style: '2rem',
  },
  {
    space: 'h-6',
    text: 'Spacing-6',
    class: 'font-bold',
    className: 'spacing-6',
    style: '1.5rem',
  },
  {
    space: 'h-4',
    text: 'Spacing-4',
    class: 'font-bold',
    className: 'spacing-4',
    style: '1rem',
  },
  {
    space: 'h-3',
    text: 'Spacing-3',
    class: 'font-bold',
    className: 'spacing-3',
    style: '0.75rem',
  },
  {
    space: 'h-2',
    text: 'Spacing-2',
    class: 'font-bold',
    className: 'spacing-2',
    style: '0.5rem',
  },
  {
    space: 'h-1',
    text: 'Spacing-1',
    class: 'font-bold',
    className: 'spacing-1',
    style: '0.25rem',
  },
];
</script>