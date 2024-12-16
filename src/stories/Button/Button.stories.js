import Button from '../../components/Button/Button.vue';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger', 'disable', 'icon'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
    showLeft: {
      control: { type: 'boolean' },
    },
    showRight: {
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
  showLeft: false,
  showRight: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  rounded: false,
  showLeft: false,
  showRight: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'md',
  rounded: false,
  showLeft: false,
  showRight: true,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  rounded: false,
  showLeft: false,
  showRight: true,
};

export const Disable = Template.bind({});
Disable.args = {
  variant: 'disable',
  size: 'md',
  rounded: false,
  showLeft: false,
  showRight: true,
};

export const IconType = Template.bind({});
IconType.args = {
  variant: 'icon',
  size: 'md',
  rounded: false,
  showLeft: false,
  showRight: true,
};
