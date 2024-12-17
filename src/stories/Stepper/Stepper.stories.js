import Stepper from '../../components/Stepper/Stepper.vue';

export default {
  title: 'Components/Stepper',
  tags: ['autodocs'],
  component: Stepper,
  argTypes: {
    currentStep: { control: { type: 'number', min: 0, step: 1 } },
  },
};

const Template = (args) => ({
  components: { Stepper },
  setup() {
    return { args };
  },
  template: '<Stepper v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 1,
};

export const Completed = Template.bind({});
Completed.args = {
  steps: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 4,
};
