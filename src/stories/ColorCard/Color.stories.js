import Color from '../../components/Color/Color.vue';

export default {
  title: "Components/Color",
  component: Color,
};

const colors = [
  { color: "#FF1755", token: "var(--awwd-ref-color-primary-50)" },
  { color: "#FF618B", token: "var(--awwd-ref-color-primary-30)" },
  { color: "#AD103A", token: "var(--awwd-ref-color-primary-70)" },
  // 添加更多色票到此
];

export const ColorList = () => ({
    components: { Color },
    setup() {
      return { colors };
    },
    template: `
      <Color :colors="colors" />
    `,
  });