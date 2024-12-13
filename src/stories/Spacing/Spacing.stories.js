import Spacing from '../../components/Spacing/Spacing.vue';

export default {
  title: "Guides/Spacing",
  component: Spacing,
};

export const SpacingList = () => ({
  components: { Spacing },
  setup() {
    return {};
  },
  template: `
    <Spacing />
  `,
});
