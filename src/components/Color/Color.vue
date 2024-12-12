<template>
    <div class="p-4 space-y-8">
      <div>
      <h1 class="mb-4 text-3xl font-bold">
        Color
      </h1>
      <p class="font-light">
        Tailwind includes an expertly-crafted default color palette out-of-the-box that is a great starting point if you don't have your own specific branding in mind.
      </p>
    </div>
    <!-- 使用 v-for 來遍歷色票區塊 -->
    <div v-for="(block, index) in colorBlocks" :key="index">
      <!-- 顯示每個色票區塊的標題 -->
      <h2 class="mb-4 text-xl font-bold">
        <span class="mr-2 text-sky-400">#</span>{{ block.title }}
      </h2>
      
      <!-- 顯示每個色票區塊的顏色列表 -->
      <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <ColorCard 
          v-for="(item, index) in block.colors" 
          :key="index" 
          :color="item.color" 
          :token="item.token" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import ColorCard from './ColorCard.vue';

export default {
  name: 'Color',
  components: { ColorCard },
  data() {
    return {
      colorBlocks: [
        {
          title: 'Primary',  // 色票區塊 1 的標題
          colors: [
            { color: "#FF1755", token: "var(--awwd-ref-color-primary-50)" },
            { color: "#FF618B", token: "var(--awwd-ref-color-primary-30)" },
            { color: "#AD103A", token: "var(--awwd-ref-color-primary-70)" },
            { color: "#AD103A", token: "var(--awwd-ref-color-primary-70)" },
            { color: "#AD103A", token: "var(--awwd-ref-color-primary-70)" },
          ]
        },
        {
          title: 'Secondary',  // 色票區塊 2 的標題
          colors: [
            { color: "#1E40AF", token: "var(--awwd-ref-color-secondary-50)" },
            { color: "#3B82F6", token: "var(--awwd-ref-color-secondary-30)" },
            { color: "#1E3A8A", token: "var(--awwd-ref-color-secondary-70)" },
          ]
        },
        {
          title: 'Tertiary',  // 色票區塊 3 的標題
          colors: [
            { color: "#16A34A", token: "var(--awwd-ref-color-tertiary-50)" },
            { color: "#22C55E", token: "var(--awwd-ref-color-tertiary-30)" },
            { color: "#15803D", token: "var(--awwd-ref-color-tertiary-70)" },
          ]
        },
        // 可以在此處添加更多色票區塊
      ]
    };
  }
}
</script>
