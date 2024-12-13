<template>
    <div class="p-4 space-y-8">
      <div>
        <h1 class="mb-4 text-3xl font-bold">Icons</h1>
        <p class="font-light">
          Icons are graphical representations of meaning. Icons can express actions, states, and even categorize data. Our icons are designed to maintain cross-platform consistency.
        </p>
      </div>
  
      <!-- 使用 v-for 渲染每個圖示區塊 -->
      <div v-for="(block, index) in iconBlocks" :key="index">
        <h2 class="mb-4 text-xl font-bold">
          <span class="mr-2 text-sky-400">#</span>{{ block.title }}
        </h2>
  
        <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          <IconCard 
            v-for="(item, index) in block.icons" 
            :key="index" 
            :icon="item.icon" 
            :name="item.name" 
            :token="item.token" 
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin';
  import Fa6BrandsDribbble from '~icons/fa6-brands/dribbble';
  import Fa6SolidEnvelope from '~icons/fa6-solid/envelope';
  import IconCard from './IconCard.vue';
  
  export default {
    name: 'Icon',
    components: { IconCard },
    data() {
      return {
        iconBlocks: [
          {
            title: 'Variants',
            icons: [
              { 
                icon: Fa6BrandsLinkedin, 
                name: "Fa6BrandsLinkedin", 
                token: "Linkedin" 
              },
              { 
                icon: Fa6BrandsDribbble, 
                name: "Fa6BrandsDribbble", 
                token: "Dribbble" 
              },
              { 
                icon: Fa6SolidEnvelope, 
                name: "Fa6SolidEnvelope", 
                token: "Envelope" 
              }
            ]
          },
          {
            title: 'Icons',
            icons: [
              { 
                icon: Fa6BrandsLinkedin, 
                name: "Fa6BrandsLinkedin", 
                token: "Linkedin" 
              },
              { 
                icon: Fa6BrandsDribbble, 
                name: "Fa6BrandsDribbble", 
                token: "Dribbble" 
              },
              { 
                icon: Fa6SolidEnvelope, 
                name: "Fa6SolidEnvelope", 
                token: "Envelope" 
              }
            ]
          }
        ]
      };
    }
  };
  </script>
  