<template>
    <div class="relative w-[375px] px-6 bg-gray-200/80 h-[812px] text-gray-900">
        <div class="grid grid-cols-4 gap-4 h-full">
            <div 
                v-for="item in 4"
                :key="item"
                class="h-full bg-red-200/70">
            </div>
        </div>

        <div class="absolute top-0 left-0 p-6">
            <p class="mb-6 text-4xl font-bold">
                Mobile
            </p>
            <ul class="font-normal list-disc list-inside">
                <li>Columns: 4</li>
                <li>Margin: 24px</li>
                <li>Gutter: 16px</li>
            </ul>
        </div>
    </div>
</template>