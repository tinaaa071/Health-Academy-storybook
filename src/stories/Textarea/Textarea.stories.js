import Textarea from '../../components/Textarea/Textarea.vue';

export default {
    title: 'Forms/Textarea',
    tags: ['autodocs'],
    component: Textarea,
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
    components: { Textarea },
    setup() {
      return { args };
    },
    template: '<Textarea v-bind="args" />',
  });
  
  export const Default = Template.bind({});
  Default.args = {
    id: 'textarea-1',
    label: 'Textarea',
    placeholder: 'Please enter content',
    required: false,
    disabled: false,
    feedbackMessage: '',
    hasFeedback: false,
    icon: false,
  };
  
  export const Required = Template.bind({});
  Required.args = {
    id: 'textarea-2',
    label: 'Textarea',
    placeholder: 'Please enter content',
    required: true,
    disabled: false,
    feedbackMessage: '',
    hasFeedback: false,
    icon: false,
  };
  
  export const FeedbackMessage = Template.bind({});
  FeedbackMessage.args = {
    id: 'textarea-3',
    label: 'Textarea',
    placeholder: 'Please enter content',
    required: true,
    disabled: false,
    feedbackMessage: 'This field is required',
    hasFeedback: true, // This will show the red border
    icon: false,
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    id: 'textarea-4',
    label: 'Textarea',
    placeholder: 'Please enter content',
    required: false,
    disabled: true,
    feedbackMessage: '',
    hasFeedback: false,
    icon: false,
  };
