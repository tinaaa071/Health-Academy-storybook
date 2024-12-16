<template>
    <nav class="flex gap-x-1 items-center" aria-label="Pagination">
      <!-- Previous Button -->
      <button
        type="button"
        :disabled="currentPage === 1"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100  disabled:text-gray-300 disabled:cursor-not-allowed "
        aria-label="Previous"
        @click="goToPrevious"
      >
        <Fa6SolidChevronLeft />
        <span class="sr-only">Previous</span>
      </button>
  
      <!-- Page Numbers -->
      <div class="flex gap-x-1 items-center">
        <!-- Render page buttons -->
        <button
          v-for="page in pages"
          :key="page"
          :aria-current="currentPage === page ? 'page' : undefined"
          :class="[
            'min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-none',
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'text-gray-800 hover:bg-blue-100 ',
          ]"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
  
        <!-- Ellipsis with Tooltip -->
        <div
          v-if="showEllipsis"
          class="inline-block relative"
          @mouseenter="hoveringEllipsis = true"
          @mouseleave="hoveringEllipsis = false"
        >
          <button
            type="button"
            class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg"
          >
            <span v-if="!hoveringEllipsis" class="text-xs group-hover:hidden">•••</span>
            <Fa6SolidAnglesRight v-else />
          </button>
  
          <!-- Tooltip -->
          <div
            v-if="hoveringEllipsis"
            class="absolute left-1/2 z-10 px-2 py-1 text-xs font-medium text-white whitespace-nowrap bg-gray-900 rounded shadow-sm opacity-100 transform -translate-x-1/2"
            role="tooltip"
          >
            {{ tooltipText }}
          </div>
        </div>
  
        <!-- Last Page -->
        <button
          v-if="currentPage <= totalPages - 2 && totalPages > 3"
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg  disabled:text-gray-300 disabled:pointer-events-none "
          @click="goToPage(totalPages)"
        >
          {{ totalPages }}
        </button>
      </div>
  
      <!-- Next Button -->
      <button
        type="button"
        :disabled="currentPage === totalPages"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Next"
        @click="goToNext"
      >
        <span class="sr-only">Next</span>
        <Fa6SolidAngleRight />
      </button>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      totalPages: {
        type: Number,
        default: 10,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        hoveringEllipsis: false,
      };
    },
    computed: {
      pages() {
        // Return the first few pages depending on the current page
        const firstPages = [1, 2, 3];
        if (this.currentPage <= 3) {
          return firstPages;
        }
        return firstPages.concat(this.currentPage);
      },
      showEllipsis() {
        // Show ellipsis if total pages are more than 3 and current page is not near the last
        return this.totalPages > 3 && this.currentPage <= this.totalPages - 2;
      },
      tooltipText() {
        // Adjust logic for tooltip text
        if (this.currentPage <= 3) {
          // If within the first three pages, show totalPages - 3
          return `Next ${this.totalPages - 4} Pages`;
        } else {
          // Otherwise, show the remaining pages
          const pagesLeft = this.totalPages - this.currentPage - 1;
          return `Next ${pagesLeft} Pages`;
        }
      },
    },
    methods: {
      goToPage(page) {
        this.$emit("update:currentPage", page);
      },
      goToPrevious() {
        if (this.currentPage > 1) {
          this.goToPage(this.currentPage - 1);
        }
      },
      goToNext() {
        if (this.currentPage < this.totalPages) {
          this.goToPage(this.currentPage + 1);
        }
      },
    },
  };
  </script>
  