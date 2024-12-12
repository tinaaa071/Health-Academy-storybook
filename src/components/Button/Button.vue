<template>
  <button
    :class="[
      baseClass,
      variantClass,
      sizeClass,
      rounded ? 'rounded-full' : 'rounded-md',
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseClass() {
      return 'font-semibold focus:outline-none';
    },
    variantClass() {
      const variants = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
      };
      return variants[this.variant];
    },
    sizeClass() {
      const sizes = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      };
      return sizes[this.size];
    },
  },
};
</script>
