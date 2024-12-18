import Input from '../../components/Input/Input.vue';

export default {
    title: 'Forms/Input',
    tags: ['autodocs'],
    component: Input,
    argTypes: {
      label: { control: 'text' },
      placeholder: { control: 'text' },
      type: { control: 'text' },
      required: { control: 'boolean' },
      disabled: { control: 'boolean' },
      feedbackMessage: { control: 'text' },
      icon: { control: 'boolean' },
    },
  };
  
  const Template = (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" />',
  });
  
  export const Default = Template.bind({});
  Default.args = {
    id: 'input-1',
    label: 'Input',
    placeholder: 'Please enter content',
    required: false,
    disabled: false,
    feedbackMessage: '',
    hasFeedback: false,
    icon: false,
  };
  
  export const Required = Template.bind({});
  Required.args = {
    id: 'input-2',
    label: 'Input',
    placeholder: 'Please enter content',
    required: true,
    disabled: false,
    feedbackMessage: '',
    hasFeedback: false,
    icon: false,
  };
  
  export const FeedbackMessage = Template.bind({});
  FeedbackMessage.args = {
    id: 'input-3',
    label: 'Input',
    placeholder: 'Please enter content',
    required: true,
    disabled: false,
    feedbackMessage: 'This field is required',
    hasFeedback: true, // This will show the red border
    icon: false,
  };
  
  export const WithIcon = Template.bind({});
  WithIcon.args = {
    id: 'input-4',
    label: 'Input',
    placeholder: 'Please enter content',
    required: false,
    disabled: false,
    feedbackMessage: '',
    hasFeedback: false,
    icon: true,
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    id: 'input-5',
    label: 'Input',
    placeholder: 'Please enter content',
    required: false,
    disabled: true,
    feedbackMessage: '',
    hasFeedback: false,
    icon: false,
  };
