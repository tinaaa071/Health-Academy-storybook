import Accordion from '../../components/Accordion/Accordion.vue';

export default {
    title: "Components/Accordion",
    tags: ['autodocs'],
    component: Accordion,
    argTypes: {
      title: { control: "text" },
      size: {
        control: { type: 'select' },
        options: ['sm', 'lg'],
      },
    },
  };
  
  const Template = (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `<Accordion v-bind="args">This is the content of the accordion.</Accordion>`,
  });
  
  export const SmallAccordion = Template.bind({});
  SmallAccordion.args = {
    title: "Small Accordion",
    size: "sm",
  };
  
  export const LargeAccordion = Template.bind({});
  LargeAccordion.args = {
    title: "Large Accordion",
    size: "lg",
  };