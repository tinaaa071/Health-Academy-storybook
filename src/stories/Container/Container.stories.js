import MobilePage from '../../components/Container/Mobile.vue';
import TabletPage from '../../components/Container/Tablet.vue';
import DesktopPage from '../../components/Container/Desktop.vue';

export default {
  title: 'Guides/Container',
  component: MobilePage, // 使用 Mobile 作為組件
};

const MobileTemplate = () => ({
  components: { MobilePage },
  template: '<MobilePage />',
});

const TabletTemplate = () => ({
  components: { TabletPage },
  template: '<TabletPage />',
});

const DesktopTemplate = () => ({
  components: { DesktopPage },
  template: '<DesktopPage />',
});


export const Mobile = MobileTemplate.bind({});
export const Tablet = TabletTemplate.bind({});
export const Desktop = DesktopTemplate.bind({});
