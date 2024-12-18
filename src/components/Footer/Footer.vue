<template>
    <div class="text-white bg-blue-600">
        <nav class="px-6 py-4 shadow-md lg:px-20 lg:py-10 md:py-8 md:px-10">
          <div class="flex gap-24 justify-between items-center mx-auto max-w-7xl">
            <div class="hidden space-y-6 w-full lg:w-1/3 md:block">
                <img 
                class="w-40"
                src="https://i.imgur.com/zKMG7nK.png" alt="">
    
                <div class="space-y-3">
                    <div class="flex gap-3">
                        <Fa6SolidPhone lass="w-12" />
                        (+886)2-2276-5566
                    </div>
                    <div class="flex gap-3">
                        <Fa6SolidLocationDot class="w-12" />
                        No.488, Sec. 6, Zhongxiao E. Rd., Nangang Dist.,Taipei City 115204, Taiwan (R.O.C.)
                    </div>
                </div>
            </div>
            <!-- Menu -->
            <div class="flex gap-6 justify-between w-full">
                <div class="hidden grid-cols-2 gap-x-8 gap-y-9 lg:grid">
                    <a href="#" class="">Breaking News</a>
                    <a href="#" class="">Training Institute</a>
                    <a href="#" class="">Life in Taiwan</a>
                    <a href="#" class="">Sitemap</a>
                    <a href="#" class="">Contact Us</a>
                </div>
                <div class="mx-auto text-center md:text-left">
                    <span class="hidden md:block">Follow Us On</span>
                    <div class="flex gap-6 md:mt-4">
                        <button type="button" class="p-2 rounded-full border border-white hover:bg-white hover:text-blue-600">
                            <Fa6BrandsFacebookF  />
                        </button>
                        <button type="button" class="p-2 rounded-full border border-white hover:bg-white hover:text-blue-600">
                            <Fa6BrandsYoutube  />
                        </button>
                        <button type="button" class="p-2 rounded-full border border-white hover:bg-white hover:text-blue-600">
                            <Fa6BrandsLine  />
                        </button>
                        <button type="button" class="p-2 rounded-full border border-white hover:bg-white hover:text-blue-600">
                            <Fa6SolidEnvelope  />
                        </button>
                    </div>
                    <div class="flex flex-col gap-3 mt-6 lg:mt-9">
                        <span>Traffic：10000</span>
                        <span>Updated：2024.12.23</span>
                    </div>
                </div>
            </div>
          </div>
        </nav>
        <div class="flex flex-col text-xs font-medium border-t border-white md:text-sm lg:flex-row md:px-10 md:py-6 lg:px-20">
            <div class="flex flex-col justify-between items-start px-6 md:flex-row lg:justify-normal lg:gap-6 md:px-0">
                <button class="py-3 w-full text-left border-b border-white/20 md:py-0 md:w-fit md:border-none" >Privacy Policy</button>
                <button class="py-3 w-full text-left border-b border-white/20 md:py-0 md:w-fit md:border-none">Information Security Policy</button>
                <button class="py-3 w-full text-left border-b lg:hidden border-white/20 md:py-0 md:w-fit md:border-none">Sitemap</button>
                <button class="py-3 w-full text-left border-b lg:hidden border-white/20 md:py-0 md:w-fit md:border-none">Contact Us</button>
            </div>
            <p class="hidden ml-auto lg:block">© 2024 Taiwan Healthcare Academy.</p>
        </div>
        <p class="px-6 py-5 text-xs font-medium md:border-t md:text-sm border-white/20 lg:hidden md:py-4 md:px-10">
            © 2024 Taiwan Healthcare Academy.
        </p>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  /* 如果有需要可以添加更多樣式 */
  </style>
  