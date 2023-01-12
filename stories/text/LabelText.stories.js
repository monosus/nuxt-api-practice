import LabelText from '@/components/text/LabelText.vue';

export default {
  title: 'Components/Text/LabelText',
  component: LabelText,
  argTypes: {
    text: { control: 'text' },
    isLarge: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LabelText },
  setup() {
    return { args }
  },
  template: `
    <LabelText v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  text: '利用無料',
  isLarge: false,
};
