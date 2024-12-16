<template>
  <button
    class="flex items-center"
    :class="[
      baseClass,
      variantClass,
      sizeClass,
      rounded ? 'rounded-full' : 'rounded-md sm:rounded-lg',
    ]"
  >
    <!-- Left BTN -->
    <Fa6SolidArrowLeftLong v-if="showLeft" />
    <span v-if="variant !== 'icon'">
      <slot />
    </span>
    <!-- Right BTN -->
    <Fa6SolidArrowRightLong v-if="showRight" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) =>
        ['primary', 'secondary', 'tertiary', 'danger', 'disable', 'icon'].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value),
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    showLeft: {
      type: Boolean,
      default: true, // 默認顯示左側按鈕
    },
    showRight: {
      type: Boolean,
      default: true, // 默認顯示右側按鈕
    },
  },
  computed: {
    baseClass() {
      return 'font-semibold focus:outline-none';
    },
    variantClass() {
      const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:border-2 focus:border-blue-300',
        secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-100',
        tertiary: 'text-blue-500 hover:text-blue-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        disable: 'bg-gray-50 text-gray-300 border-2 border-gray-300 cursor-not-allowed',
        icon: 'bg-gray-50 text-gray-400 border-1 border-gray-200 hover:bg-blue-500 hover:text-white shadow',
      };
      return variants[this.variant];
    },
    sizeClass() {
      const sizes = {
        xs: 'p-2 text-xs gap-1',
        sm: 'px-4 py-2 text-sm gap-2',
        md: 'px-5 py-3 text-sm gap-2',
        lg: 'px-6 py-3 text-base gap-2',
      };
      return sizes[this.size];
    },
  },
};
</script>
