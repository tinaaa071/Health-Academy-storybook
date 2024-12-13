import FontSizePage from '../../components/Typography/FontSize.vue';
import FontWeightPage from '../../components/Typography/FontWeight.vue';

export default {
  title: 'Guides/Typography',
  component: FontSizePage, // 使用 FontSizePage 作為組件
};

const FontSizeTemplate = () => ({
  components: { FontSizePage }, // 引入 FontSizePage
  template: '<FontSizePage />',  // 使用 FontSizePage 來渲染
});

const FontWeightTemplate = () => ({
  components: { FontWeightPage },
  template: '<FontWeightPage />', // 使用 FontWeightPage 來渲染
});

export const FontSize = FontSizeTemplate.bind({});
export const FontWeight = FontWeightTemplate.bind({});
