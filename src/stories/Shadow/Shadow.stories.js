import Shadow from '../../components/Shadow/Shadow.vue';

export default {
  title: "Guides/Shadow",
  component: Shadow,
};

export const ShadowList = () => ({
  components: { Shadow },
  setup() {
    return {};
  },
  template: `
    <Shadow />
  `,
});
