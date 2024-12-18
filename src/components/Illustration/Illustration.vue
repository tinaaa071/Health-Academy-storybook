<template>
    <div class="p-4 space-y-8">
      <div>
        <h1 class="mb-4 text-3xl font-bold">
          Image
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
            :aspectClass="item.aspectClass"
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
            title: 'Logo',
            imgs: [
              {
                imgSrc: 'https://i.imgur.com/eJFDM7P.png',
                imgTitle: 'Logo'
              }
            ]
          },
          {
            title: 'Courses',
            imgs: [
              {
                imgSrc: 'https://i.imgur.com/1i8vKDx.png',
                imgTitle: 'Search Course',
                aspectClass: 'aspect-[1/1]',
              },
              {
                imgSrc: 'https://i.imgur.com/WL7TwAX.png',
                imgTitle: 'Complete Registration',
                aspectClass: 'aspect-[1/1]',
              },
            ]
          },
          {
            title: 'Member',
            imgs: [
              {
                imgSrc: 'https://i.imgur.com/I3qR5bz.png',
                imgTitle: 'Courses Page'
              },
              {
                imgSrc: 'https://i.imgur.com/sHOMLgs.png',
                imgTitle: 'Review Page'
              },
              {
                imgSrc: 'https://i.imgur.com/kyDOImJ.png',
                imgTitle: 'Wishlist Page'
              },
              {
                imgSrc: 'https://i.imgur.com/Y2QaynG.png',
                imgTitle: 'Satisfaction Page'
              },
              {
                imgSrc: 'https://i.imgur.com/pvBTUxQ.png',
                imgTitle: 'Sent Mail'
              },
            ]
          },
          {
            title: 'Banner',
            imgs: [
              {
                imgSrc: 'https://i.imgur.com/FPUUHBD.png',
                imgTitle: 'Training Institution'
              },
              {
                imgSrc: 'https://i.imgur.com/OeJKn7u.png',
                imgTitle: 'Admin'
              },
            ]
          },
        ]
      };
    }
  }
  </script>
  