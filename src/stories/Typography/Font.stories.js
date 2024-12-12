import Font from '../../components/Typography/Font.vue';

export default {
  title: "Guides/Typography",
  component: Font,
};

export const FontList = () => ({
  components: { Font },
  setup() {
    return {};
  },
  template: `
    <Font />
  `,
});
