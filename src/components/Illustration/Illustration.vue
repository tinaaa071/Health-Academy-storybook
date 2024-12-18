<template>
    <div class="p-4 space-y-8">
      <div>
        <h1 class="mb-4 text-3xl font-bold">
          Illustration
        </h1>
        <p class="font-light">
          Tailwind includes an expertly-crafted default color palette out-of-the-box that is a great starting point if you don't have your own specific branding in mind.
        </p>
      </div>
      <!-- 使用 v-for -->
      <div v-for="(block, index) in imgBlocks" :key="index">
        <!-- 顯示區塊的標題 -->
        <h2 class="mb-4 text-xl font-bold">
          <span class="mr-2 text-sky-400">#</span>{{ block.title }}
        </h2>
        
        <!-- 顯示每個圖片區塊的列表 -->
        <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          <IllustrationCard 
            v-for="(item, index) in block.imgs" 
            :key="index"
            :imgSrc="item.imgSrc"
            :imgTitle="item.imgTitle"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import IllustrationCard from './IllustrationCard.vue';
  
  export default {
    name: 'Illustration',
    components: { IllustrationCard },
    data() {
      return {
        imgBlocks: [
          {
            title: 'Courses',
            imgs: [
              {
                imgSrc: 'https://images.unsplash.com/photo-1731076274484-e3882b02d523?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imgTitle: 'Primary Color 1'
              },
              {
                imgSrc: 'https://images.unsplash.com/photo-1731413263259-d01c433bb0f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imgTitle: 'Primary Color 2'
              },
            ]
          },
          {
            title: 'Member',
            imgs: [
              {
                imgSrc: 'path/to/secondary1.jpg',
                imgTitle: 'Secondary Color 1'
              },
              {
                imgSrc: 'path/to/secondary2.jpg',
                imgTitle: 'Secondary Color 2'
              },
            ]
          },
          {
            title: 'Banner',
            imgs: [
              {
                imgSrc: 'path/to/tertiary1.jpg',
                imgTitle: 'Tertiary Color 1'
              },
              {
                imgSrc: 'path/to/tertiary2.jpg',
                imgTitle: 'Tertiary Color 2'
              },
            ]
          },
        ]
      };
    }
  }
  </script>
  