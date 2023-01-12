import TitleSub from '@/components/title/TitleSub.vue';

export default {
  title: 'Components/Title/TitleSub',
  component: TitleSub,
  argTypes: {
    tag: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TitleSub },
  setup() {
    return { args }
  },
  template: `<TitleSub v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  tag: 'h2',
  title: '動画コンテンツ',
  subtitle: 'Video Contents',
};
