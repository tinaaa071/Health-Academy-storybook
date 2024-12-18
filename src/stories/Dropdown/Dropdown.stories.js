import Dropdown from '../../components/Dropdown/Dropdown.vue';

export default {
  title: 'Overlays/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    items: { control: 'array' }
  }
};

const Template = (args) => ({
  components: { Dropdown },
  setup() {
    return { args };
  },
  template: '<Dropdown v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  items: ['Option 1', 'Option 2', 'Option 3']
};