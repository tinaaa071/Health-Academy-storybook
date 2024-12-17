import Segmented from '../../components/Segmented/Segmented.vue';

export default {
  title: 'Components/Segmented',
  tags: ['autodocs'],
  component: Segmented,
  argTypes: {
    tabs: { control: 'array' },
  },
};

import Fa6SolidList from '~icons/fa6-solid/list';
import Fa6SolidBorderAll from '~icons/fa6-solid/border-all';

const Template = (args) => ({
    components: { Segmented },
    setup() {
      return { args };
    },
    template: `
      <Segmented v-bind="args">
        <template #tab1>
          <div class="text-gray-700">This is the content of the first tab.</div>
        </template>
        <template #tab2>
          <div class="text-gray-700">This is the content of the second tab with more details.</div>
        </template>
        <template #tab3>
          <div class="text-gray-700">This is the content of the third tab.</div>
        </template>
      </Segmented>
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
  
  export const Icon = Template.bind({});
  Icon.args = {
    tabs: [
      { name: 'tab1', label: 'List', icon: Fa6SolidList },
      { name: 'tab2', label: 'Kanban', icon: Fa6SolidBorderAll }
    ],
  };
