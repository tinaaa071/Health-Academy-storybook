import '/src/styles/index.css';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Guides', ['Color', 'Typography', 'Spacing', 'Corner', 'Shadow', 'Icons'], 'Components'],
      },
    },
  },
};


export default preview;
