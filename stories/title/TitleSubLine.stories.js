import TitleSubLine from '@/components/title/TitleSubLine.vue';

export default {
  title: 'Components/Title/TitleSubLine',
  component: TitleSubLine,
  argTypes: {
    tag: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TitleSubLine },
  setup() {
    return { args }
  },
  template: `<TitleSubLine v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  tag: 'h1',
  title: '企業コードを入力してください',
  sub: '所属する企業から受け取った企業コードを入力してください。',
};
