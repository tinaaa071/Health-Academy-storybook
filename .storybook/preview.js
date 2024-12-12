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
        order: ['Guides', 'Components', 'Example'],
      },
    },
  },
};


export default preview;
