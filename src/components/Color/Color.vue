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
          title: 'Primary',
          colors: [
            { color: "#EFF6FF", token: "blue-50" },
            { color: "#DBEAFE", token: "blue-100" },
            { color: "#93C5FD", token: "blue-300" },
            { color: "#3B82F6", token: "blue-500" },
            { color: "#2563EB", token: "blue-600" },
            { color: "#1D4ED8", token: "blue-700" },
          ]
        },
        {
          title: 'Gray Scale',
          colors: [
            { color: "#F9FAFB", token: "gray-50" },
            { color: "#F3F4F6", token: "gray-100" },
            { color: "#E5E7EB", token: "gray-200" },
            { color: "#D1D5DB", token: "gray-300" },
            { color: "#9CA3AF", token: "gray-400" },
            { color: "#6B7280", token: "gray-500" },
            { color: "#4B5563", token: "gray-600" },
            { color: "#374151", token: "gray-700" },
            { color: "#1F2937", token: "gray-800" },
            { color: "#111827", token: "gray-900" },
          ]
        },
        {
          title: 'Success',
          colors: [
            { color: "#D1FAE5", token: "emerald-100" },
            { color: "#A7F3D0", token: "emerald-200" },
            { color: "#34D399", token: "emerald-400" },
            { color: "#10B981", token: "emerald-500" },
            { color: "#047857", token: "emerald-700" }
          ]
        },
        {
          title: 'Notify',
          colors: [
            { color: "#FFF7ED", token: "orange-50" },
            { color: "#FDBA74", token: "orange-300" },
            { color: "#FB923C", token: "orange-400" },
            { color: "#F97316", token: "orange-500" }
          ]
        },
        {
          title: 'Error',
          colors: [
            { color: "#FEE2E2", token: "red-100" },
            { color: "#FECACA", token: "red-200" },
            { color: "#F87171", token: "red-400" },
            { color: "#EF4444", token: "red-500" },
            { color: "#B91C1C", token: "red-700" }
          ]
        },
      ]
    };
  }
}
</script>
