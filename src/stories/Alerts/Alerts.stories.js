import Alerts from '../../components/Alerts/Alerts.vue';

export default {
  title: 'Components/Alerts',
  tags: ['autodocs'],
  component: Alerts,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'error', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'], // 新增 size 控制項
    },
  },
};

const Template = (args) => ({
  components: { Alerts },
  setup() {
    return { args };
  },
  template: '<Alerts v-bind="args" />',
});

export const Info = Template.bind({});
Info.args = {
  title: 'Information',
  message: 'This is an info alert.',
  variant: 'info',
  size: 'lg', // 設定為 lg
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  message: 'This is a success alert.',
  variant: 'success',
  size: 'lg', // 設定為 lg
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  message: 'This is an error alert.',
  variant: 'error',
  size: 'lg', // 設定為 lg
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  message: 'This is a warning alert.',
  variant: 'warning',
  size: 'lg', // 設定為 lg
};
