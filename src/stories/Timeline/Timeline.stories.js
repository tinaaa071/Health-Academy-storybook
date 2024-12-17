import Timeline from '../../components/Timeline/Timeline.vue';

export default {
    title: 'Components/Timeline',
    tags: ['autodocs'],
    component: Timeline,
  };
  
  const Template = (args) => ({
    components: { Timeline },
    setup() {
      return { args };
    },
    template: '<Timeline v-bind="args" />',
  });
  
  export const InProgress = Template.bind({});
  InProgress.args = {
    events: [
        { time: "2024-01-01", content: "Event 1", status: "" },
        { time: "2024-02-01", content: "Event 2", status: "" },
        { time: "2024-03-01", content: "Event 3", status: "" },
    ],
  };
  
  export const Done = Template.bind({});
  Done.args = {
    events: [
        { time: "2024-01-01", content: "Event 1", status: "check" },
        { time: "2024-02-01", content: "Event 2", status: "check" },
        { time: "2024-03-01", content: "Event 3", status: "check" },
    ],
  };

  export const Failed = Template.bind({});
  Failed.args = {
    events: [
        { time: "2024-01-01", content: "Event 1", status: "check" },
        { time: "2024-02-01", content: "Event 2", status: "check" },
        { time: "2024-03-01", content: "Event 3", status: "cross" },
    ],
  };