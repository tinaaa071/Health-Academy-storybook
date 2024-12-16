import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue';

export default {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  component: Breadcrumb,
  argTypes: {
    items: { control: 'array' },
  },
}

const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    return { args }
  },
  template: '<Breadcrumb v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Second', href: '/second' },
    { label: 'Third', href: '/third' },
  ],
}

export const NoLink = Template.bind({})
NoLink.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Second' },
    { label: 'Third' },
  ],
}
