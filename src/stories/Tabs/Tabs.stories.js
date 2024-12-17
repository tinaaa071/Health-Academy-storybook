import Tabs from '../../components/Tabs/Tabs.vue';

export default {
    title: 'Components/Tabs',
    tags: ['autodocs'],
    component: Tabs,
    argTypes: {
      tabs: { control: 'array' },
    },
  };
  
  const Template = (args) => ({
    components: { Tabs },
    setup() {
      return { args };
    },
    template: `
    <Tabs v-bind="args">
      <template #tab1>
        <div class="text-gray-700">This is the content of the first tab.</div>
      </template>
      <template #tab2>
        <div class="text-gray-700">This is the content of the second tab with more details.</div>
      </template>
      <template #tab3>
        <div class="text-gray-700">This is the content of the third tab.</div>
      </template>
    </Tabs>
  `,
});
  
  export const Default = Template.bind({});
  Default.args = {
    tabs: [
      { name: 'tab1', label: 'Tab 1' },
      { name: 'tab2', label: 'Tab 2' },
      { name: 'tab3', label: 'Tab 3' }, // No number for this tab
    ],
  };
  
  export const Numbers = Template.bind({});
  Numbers.args = {
    tabs: [
      { name: 'tab1', label: 'First Tab', number: 1 },
      { name: 'tab2', label: 'Second Tab', number: 2 },
      { name: 'tab3', label: 'Third Tab', number: 3 },
    ],
  };