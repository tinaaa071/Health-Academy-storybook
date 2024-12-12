import Button from '../../components/Button/Button.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  rounded: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  rounded: false,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  rounded: false,
};
