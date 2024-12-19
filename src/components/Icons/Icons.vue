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
  
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-3">
          <IconCard 
            v-for="(item, index) in block.icons" 
            :key="index" 
            :icon="item.icon" 
            :iconClass="item.iconClass" 
            :name="item.name" 
            :token="item.token" 
            :showBTN="item.showBTN" 
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Fa6SolidHouse from '~icons/fa6-solid/house';
  import Fa6SolidBars from '~icons/fa6-solid/bars';
  import Fa6SolidMagnifyingGlass from '~icons/fa6-solid/magnifying-glass';
  import Fa6SolidBell from '~icons/fa6-solid/bell';
  import Fa6SolidCheck from '~icons/fa6-solid/check';
  import Fa6SolidXmark from '~icons/fa6-solid/xmark';
  import Fa6SolidAngleDown from '~icons/fa6-solid/angle-down';
  import Fa6SolidAngleUp from '~icons/fa6-solid/angle-up';
  import Fa6SolidAngleLeft from '~icons/fa6-solid/angle-left';
  import Fa6SolidAngleRight from '~icons/fa6-solid/angle-right';
  import Fa6SolidAnglesRight from '~icons/fa6-solid/angles-right';
  import Fa6SolidArrowDownLong from '~icons/fa6-solid/arrow-down-long';
  import Fa6SolidArrowUpLong from '~icons/fa6-solid/arrow-up-long';
  
  import Fa6RegularCircleQuestion from '~icons/fa6-regular/circle-question';
  
  import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f';
  import Fa6BrandsLine from '~icons/fa6-brands/line';
  import Fa6BrandsYoutube from '~icons/fa6-brands/youtube';
  import Fa6BrandsXTwitter from '~icons/fa6-brands/x-twitter';
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
                icon: Fa6SolidHouse, 
                name: "Error", 
                token: "Home" ,
                iconClass: "text-red-500",
                showBTN: false
              },
              { 
                icon: Fa6SolidHouse, 
                name: "text-sm", 
                token: "Home" ,
                iconClass: "text-sm",
                showBTN: false
              },
              { 
                icon: Fa6SolidHouse, 
                name: "text-base", 
                token: "Home" ,
                iconClass: "text-base",
                showBTN: false
              },
              { 
                icon: Fa6SolidHouse, 
                name: "text-lg", 
                token: "Home" ,
                iconClass: "text-lg",
                showBTN: false
              },
            ]
          },
          {
            title: 'Icons',
            icons: [
            { 
                icon: Fa6SolidHouse, 
                name: "Fa6SolidHouse", 
                token: "Home" 
              },
              { 
                icon: Fa6SolidBars, 
                name: "Fa6SolidBars", 
                token: "Menu" 
              },
              { 
                icon: Fa6SolidMagnifyingGlass, 
                name: "Fa6SolidMagnifyingGlass", 
                token: "Search" 
              },
              { 
                icon: Fa6SolidBell, 
                name: "Fa6SolidBell", 
                token: "Notification" 
              },
              { 
                icon: Fa6BrandsFacebookF, 
                name: "Fa6BrandsFacebookF", 
                token: "Facebook" 
              },
              { 
                icon: Fa6BrandsLine, 
                name: "Fa6BrandsLine", 
                token: "Line" 
              },
              { 
                icon: Fa6BrandsYoutube, 
                name: "Fa6BrandsYoutube", 
                token: "Youtube" 
              },
              { 
                icon: Fa6BrandsXTwitter, 
                name: "Fa6BrandsXTwitter", 
                token: "X" 
              },
              { 
                icon: Fa6SolidCheck, 
                name: "Fa6SolidCheck", 
                token: "Check" 
              },
              { 
                icon: Fa6SolidXmark, 
                name: "Fa6SolidXmark", 
                token: "Cross" 
              },
              { 
                icon: Fa6RegularCircleQuestion, 
                name: "Fa6RegularCircleQuestion", 
                token: "Question" 
              },
              { 
                icon: Fa6SolidAngleDown, 
                name: "Fa6SolidAngleDown", 
                token: "Chevron-Down" 
              },
              { 
                icon: Fa6SolidAngleUp, 
                name: "Fa6SolidAngleUp", 
                token: "Chevron-Up" 
              },
              { 
                icon: Fa6SolidAngleLeft, 
                name: "Fa6SolidAngleLeft", 
                token: "Chevron-Left" 
              },
              { 
                icon: Fa6SolidAngleRight, 
                name: "Fa6SolidAngleRight", 
                token: "Chevron-Right" 
              },
              { 
                icon: Fa6SolidAnglesRight, 
                name: "Fa6SolidAnglesRight", 
                token: "Double Chevron-Right" 
              },
              { 
                icon: Fa6SolidArrowDownLong, 
                name: "Fa6SolidArrowDownLong", 
                token: "Arrow-Down" 
              },
              { 
                icon: Fa6SolidArrowUpLong, 
                name: "Fa6SolidArrowUpLong", 
                token: "Arrow-Up" 
              },
            ]
          }
        ]
      };
    }
  };
  </script>
  