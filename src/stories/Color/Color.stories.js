import Color from '../../components/Color/Color.vue';

export default {
  title: "Guides/Color",
  component: Color,
};

export const ColorList = () => ({
  components: { Color },
  setup() {
    return {};
  },
  template: `
    <Color />
  `,
});
