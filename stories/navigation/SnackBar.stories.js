import SnackBar from '@/components/navigation/SnackBar.vue';

export default {
  title: 'Components/Navigation/SnackBar',
  component: SnackBar,
  argTypes: {
    text: { control: 'text' },
    isShow: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SnackBar },
  setup() {
    return { args }
  },
  template: `<SnackBar v-bind="args" @close="isShow = false" />`,
});

export const Default = Template.bind({});
Default.args = {
  text: '申請を承認しました',
  isShow: true,
};
