<template>
    <div class="relative w-[768px] px-10 bg-gray-200/80 h-[900px] text-gray-900">
        <div class="grid grid-cols-8 gap-6 h-full">
            <div 
                v-for="item in 8"
                :key="item"
                class="h-full bg-red-200/70">
            </div>
        </div>

        <div class="absolute top-0 left-0 px-10 py-6">
            <p class="mb-6 text-4xl font-bold">
                Tablet
            </p>
            <ul class="font-normal list-disc list-inside">
                <li>Columns: 8</li>
                <li>Margin: 40px</li>
                <li>Gutter: 24px</li>
            </ul>
        </div>
    </div>
</template>