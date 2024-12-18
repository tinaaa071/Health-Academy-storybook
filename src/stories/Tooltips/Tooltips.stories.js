import Tooltips from '../../components/Tooltips/Tooltips.vue';

export default {
    title: 'Overlays/Tooltips',
    tags: ['autodocs'],
    component: Tooltips,
    argTypes: {
      text: { control: 'text', defaultValue: 'This is a tooltip' },
      position: {
        control: 'select',
        options: ['top', 'bottom', 'left', 'right'],
        defaultValue: 'top',
      },
    },
  };
  
  const Template = (args) => ({
    components: { Tooltips },
    setup() {
      return { args };
    },
    template: `
      <div class="flex justify-center items-center h-64">
        <Tooltips v-bind="args">
          <button class="px-4 py-2 text-white bg-blue-500 rounded">Hover me</button>
        </Tooltips>
      </div>
    `,
  });
  
  export const Top = Template.bind({});
  Top.args = {
    text: 'Tooltip Top',
    position: 'top',
  };
  
  export const Bottom = Template.bind({});
  Bottom.args = {
    text: 'Tooltip Bottom',
    position: 'bottom',
  };
  
  export const Left = Template.bind({});
  Left.args = {
    text: 'Tooltip Left',
    position: 'left',
  };
  
  export const Right = Template.bind({});
  Right.args = {
    text: 'Tooltip Right',
    position: 'right',
  };