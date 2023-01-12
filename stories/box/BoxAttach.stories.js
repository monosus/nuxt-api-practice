import BoxAttach from '@/components/box/BoxAttach.vue';

export default {
  title: 'Components/Box/BoxAttach',
  component: BoxAttach,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BoxAttach },
  setup() {
    return { args }
  },
  template: `<BoxAttach v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  listFile: [
    {
      text: 'サービス概要資料.pdf',
      hasIcon: true,
    },
    {
      text: 'サービス申し込みテンプレート.xlsx',
      hasIcon: true,
    },
    {
      text: '参考画像.jpg',
      hasIcon: true,
    },
  ],
};
