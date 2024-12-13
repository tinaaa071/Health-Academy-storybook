import Icons from '../../components/Icons/Icons.vue';

export default {
  title: "Components/Icons",
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
