<template>
  <div class="p-4 mx-auto max-w-800">
    <!-- 標題 -->
    <h1 class="mb-4 text-xl font-bold">
      <span>#</span>Primary
    </h1>
    <!-- 色票列表 -->
    <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      <ColorCard 
        v-for="(item, index) in colors" 
        :key="index" 
        :color="item.color" 
        :token="item.token" 
      />
    </div>
  </div>
</template>

<script>
import ColorCard from './ColorCard.vue';

export default {
  name: 'Color',
  components: { ColorCard },
  props: {
    colors: {
      type: Array,
      default: () => []
    }
  }
}
</script>
