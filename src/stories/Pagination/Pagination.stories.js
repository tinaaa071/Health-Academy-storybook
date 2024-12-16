import Pagination from '../../components/Pagination/Pagination.vue';

export default {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  component: Pagination,
  argTypes: {
    currentPage: { control: { type: 'number', min: 1, max: 10 } },
    totalPages: { control: { type: 'number', min: 1 } },
    'update:currentPage': { action: 'update:currentPage' },
  },
};

const Template = (args) => ({
  components: { Pagination },
  setup() {
    return { args };
  },
  template: '<Pagination v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  currentPage: 1,
  totalPages: 3,
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 3,
  totalPages: 3,
};