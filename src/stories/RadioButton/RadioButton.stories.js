import RadioButton from '../../components/RadioButton/RadioButton.vue';

export default {
  title: 'Components/RadioButton',
  tags: ['autodocs'],
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { RadioButton },
  setup() {
    return { args };
  },
  template: '<RadioButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'radio1',
  value: 'option1',
  label: 'Option',
  modelValue: 'option',
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  id: 'radio2',
  value: 'option2',
  label: 'Option',
  modelValue: 'option2',
  disabled: false,
};

export const DisabledUnselected = Template.bind({});
DisabledUnselected.args = {
  id: 'radio3',
  value: 'option3',
  label: 'Option',
  modelValue: 'option',
  disabled: true,
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  id: 'radio4',
  value: 'option4',
  label: 'Option',
  modelValue: 'option4',
  disabled: true,
};