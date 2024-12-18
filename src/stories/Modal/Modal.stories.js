import Modal from '../../components/Modal/Modal.vue';

export default {
  title: "Overlays/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text", description: "The title of the modal" },
    isOpen: { control: "boolean", description: "Controls modal visibility" },
    confirm: { action: "confirm", description: "Triggered on confirm button click" },
    "update:isOpen": { action: "update:isOpen", description: "Close modal action" },
  },
};

const Template = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  template: `
    <Modal v-bind="args" @update:isOpen="args['update:isOpen']" @confirm="args.confirm">
    </Modal>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Example Modal",
  isOpen: true,
};
