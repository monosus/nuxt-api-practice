import TitleBorder from '@/components/title/TitleBorder.vue';

export default {
  title: 'Components/Title/TitleBorder',
  component: TitleBorder,
  argTypes: {
    tag: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TitleBorder },
  setup() {
    return { args }
  },
  template: `<TitleBorder v-bind="args">基本設定</TitleBorder>`,
});

export const Default = Template.bind({});
Default.args = {
  tag: 'h1',
};
