import LabelTag from '@/components/text/LabelTag.vue';

export default {
  title: 'Components/Text/LabelTag',
  component: LabelTag,
  argTypes: {
    text: { control: 'text' },
    styles: {
      control: { type: 'select' },
      options: ['gray', 'purple', 'red', 'black', 'gradient-blue', 'gradient-orange'],
    },
    isWide: { control: 'boolean' },
    isRadiusSm: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LabelTag },
  setup() {
    return { args }
  },
  template: `
    <LabelTag v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  text: '未対応',
  styles: 'gray',
  isWide: false,
  isRadiusSm: false,
};
