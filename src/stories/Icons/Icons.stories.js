import Icons from '../../components/Icons/Icons.vue';

export default {
  title: "Materials/Icons",
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
