import Icons from '../../components/Icons/Icons.vue';

export default {
  title: "Guides/Icons",
  component: Icons,
};

export const IconsList = () => ({
  components: { Icons },
  setup() {
    return {};
  },
  template: `
    <Icons />
  `,
});
