import Footer from '../../components/Footer/Footer.vue';

export default {
  title: 'Navigations/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1100px',
            height: '800px',
          },
        },
      },
      defaultViewport: 'mobile', // 預設使用行動裝置視圖
    },
  },
};

const Template = (args) => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: '<Footer v-bind="args" />',
});

export const Mobile = Template.bind({});
Mobile.args = {};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile', // 模擬行動裝置尺寸
  },
};

export const Tablet = Template.bind({});
Tablet.args = {};
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet', // 模擬平板裝置尺寸
  },
};

export const Desktop = Template.bind({});
Desktop.args = {};
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop', // 模擬桌面裝置尺寸
  },
};
