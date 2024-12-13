import Corner from '../../components/Corner/Corner.vue';

export default {
  title: "Guides/Corner",
  component: Corner,
};

export const CornerList = () => ({
  components: { Corner },
  setup() {
    return {};
  },
  template: `
    <Corner />
  `,
});
