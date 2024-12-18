import FileUpload from "../../components/FileUpload/FileUpload.vue";

export default {
  title: "Forms/FileUpload",
  tags: ['autodocs'],
  component: FileUpload,
  argTypes: {
    uploadUrl: {
      control: { type: "text" },
      description: "The URL to which the file will be uploaded.",
      defaultValue: "/upload",
    },
    maxFiles: {
      control: { type: "number" },
      description: "Maximum number of files that can be uploaded.",
      defaultValue: 1,
    },
    singleton: {
      control: { type: "boolean" },
      description: "If true, only one file can be uploaded at a time.",
      defaultValue: true,
    },
    allowMultiple: {
      control: { type: "boolean" },
      description: "Allows uploading multiple files.",
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { FileUpload },
  setup() {
    return { args };
  },
  template: '<FileUpload v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  uploadUrl: "/upload",
  maxFiles: 1,
  singleton: true,
  allowMultiple: false,
};

export const WithHint = Template.bind({});
WithHint.args = {
  uploadUrl: "/upload",
  maxFiles: 1,
  singleton: true,
  allowMultiple: false,
  showHint: true, // 新增的參數來顯示提示文字
};
