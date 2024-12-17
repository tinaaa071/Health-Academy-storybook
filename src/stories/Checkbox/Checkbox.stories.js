import Checkbox from '../../components/Checkbox/Checkbox.vue';

export default {
  title: 'Components/Checkbox',
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
  label: 'Default Checkbox',
  checked: false,
  disabled: false,
  indeterminate: false,
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checkbox2',
  label: 'Checked Checkbox',
  checked: true,
  disabled: false,
  indeterminate: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'checkbox3',
  label: 'Disabled Checkbox',
  checked: false,
  disabled: true,
  indeterminate: false,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  id: 'checkbox4',
  label: 'Indeterminate Checkbox',
  checked: false,
  disabled: false,
  indeterminate: true,
};
