import Font from '../../components/Typography/Font.vue';

export default {
  title: 'Guides/Typography',
  component: Font,
};

const Template = () => ({
  components: { Font },
  template: '<Font />',
});

export const FontSize = Template.bind({});
