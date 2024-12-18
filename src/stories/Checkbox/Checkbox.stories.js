import Checkbox from '../../components/Checkbox/Checkbox.vue';

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'checkbox1',
  label: 'Option',
  checked: false,
  disabled: false,
  indeterminate: false,
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checkbox2',
  label: 'Option',
  checked: true,
  disabled: false,
  indeterminate: false,
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  id: 'checkbox3',
  label: 'Option',
  checked: false,
  disabled: true,
  indeterminate: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  id: 'checkbox3',
  label: 'Option',
  checked: true,
  disabled: true,
  indeterminate: false,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  id: 'checkbox4',
  label: 'Option',
  checked: false,
  disabled: false,
  indeterminate: true,
};
