import Illustration from '../../components/Illustration/Illustration.vue';

export default {
  title: "Materials/Image",
  component: Illustration,
};

export const ImagesList = () => ({
  components: { Illustration },
  setup() {
    return {};
  },
  template: `
    <Illustration />
  `,
});
