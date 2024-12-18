import Illustration from '../../components/Illustration/Illustration.vue';

export default {
  title: "Materials/Illustration",
  component: Illustration,
};

export const IllustrationsList = () => ({
  components: { Illustration },
  setup() {
    return {};
  },
  template: `
    <Illustration />
  `,
});
