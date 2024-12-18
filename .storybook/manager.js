import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

// 自定義主題
const customTheme = create({
  base: 'light', // 或 'dark'

//   // 顏色設置
//   colorPrimary: '#1EA7FD', // 頁面主要顏色
//   colorSecondary: '#FF4785', // 次要顏色

//   // 顏色調整
//   appBg: '#f0f0f0', // 整體背景顏色
//   appContentBg: 'white', // 內容背景顏色
//   appBorderColor: '#EAEAEA', // 邊框顏色
//   appBorderRadius: 4, // 邊框圓角

//   // 標題與文字顏色
//   textColor: '#333333', // 文字顏色
//   textInverseColor: 'white', // 反轉文字顏色（用於黑暗模式）

  // 設定左上角的 logo
  brandTitle: 'Health-Academy',
//   brandUrl: 'https://yourwebsite.com', // 點擊 logo 的跳轉連結
  brandImage: 'https://i.imgur.com/eJFDM7P.png', // logo 的 URL
});

addons.setConfig({
  theme: customTheme,
});
