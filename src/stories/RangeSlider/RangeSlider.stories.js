import RangeSlider from '../../components/RangeSlider/RangeSlider.vue';

export default {
    title: 'Components/Range Slider',
    tags: ['autodocs'],
    component: RangeSlider,
    argTypes: {
      label: { control: 'text' },
      min: { control: 'number' },
      max: { control: 'number' },
      step: { control: 'number' },
      value: { control: 'number' }
    }
  };
  
  const Template = (args) => ({
    components: { RangeSlider },
    setup() {
      return { args };
    },
    template: '<RangeSlider v-bind="args" />',
  });
  
  export const Default = Template.bind({});
  Default.args = {
    label: 'Price Range',
    min: 0,
    max: 900,
    step: 1,
    value: 0
  };

  export const Step = Template.bind({});
  Step.args = {
    label: 'Price Range',
    min: 0,
    max: 900,
    step: 100,
    value: 0
  };