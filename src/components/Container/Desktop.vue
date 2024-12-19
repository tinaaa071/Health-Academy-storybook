<template>
    <div class="relative w-[1440px] px-20 bg-gray-200/80 h-[1024px] text-gray-900">
        <div class="grid grid-cols-12 gap-6 h-full">
            <div 
                v-for="item in 12"
                :key="item"
                class="h-full bg-red-200/70">
            </div>
        </div>

        <div class="absolute top-0 left-0 px-20 py-6">
            <p class="mb-6 text-4xl font-bold">
                Desktop
            </p>
            <ul class="font-normal list-disc list-inside">
                <li>Columns: 12</li>
                <li>Margin: 80px</li>
                <li>Gutter: 24px</li>
            </ul>
        </div>
    </div>
</template>