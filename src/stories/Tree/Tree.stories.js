import Tree from '../../components/Tree/Tree.vue';

export default {
    title: 'Components/Tree',
    tags: ['autodocs'],
    component: Tree,
  };
  
  const Template = (args) => ({
    components: { Tree },
    setup() {
      return { args };
    },
    template: '<Tree v-bind="args" />',
  });
  
  export const Default = Template.bind({});
  Default.args = {
    nodes: [
      { label: 'Node 1', isOpen: false, isChecked: false, children: [{ label: 'Child 1.1' }, { label: 'Child 1.2' }] },
      { label: 'Node 2', isOpen: false, isChecked: false, children: [{ label: 'Child 2.1' }] },
      { label: 'Node 3', isOpen: false, isChecked: false, children: [{ label: 'Child 3.1' }] },
    ],
  };
  
  export const Expanded = Template.bind({});
  Expanded.args = {
    nodes: [
      { label: 'Node 1', isOpen: true, isChecked: false, children: [{ label: 'Child 1.1' }, { label: 'Child 1.2' }] },
      { label: 'Node 2', isOpen: true, isChecked: false, children: [{ label: 'Child 2.1' }] },
    ],
  };