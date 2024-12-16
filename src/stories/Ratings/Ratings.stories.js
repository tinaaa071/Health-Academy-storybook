import Ratings from '../../components/Ratings/Ratings.vue';

export default {
  title: 'Components/Ratings',
  tags: ['autodocs'],
  component: Ratings,
  argTypes: {
    rating: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 0.1
      }
    },
    totalStars: {
      control: {
        type: 'number',
        min: 1,
        max: 10
      }
    }
  }
};

const Template = (args) => ({
  components: { Ratings },
  setup() {
    return { args };
  },
  template: '<Ratings v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  rating: 0,
  totalStars: 5,
};

export const ThreeRating = Template.bind({});
ThreeRating.args = {
  rating: 3,
  totalStars: 5,
};

export const FullRating = Template.bind({});
FullRating.args = {
  rating: 5,
  totalStars: 5,
};
