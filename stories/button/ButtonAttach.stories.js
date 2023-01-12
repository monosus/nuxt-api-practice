import ButtonAttach from '@/components/button/ButtonAttach.vue';

export default {
  title: 'Components/Button/ButtonAttach',
  component: ButtonAttach,
  argTypes: {
    text: { control: 'text' },
    hasIcon: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonAttach },
  setup() {
    return { args }
  },
  template: `<ButtonAttach v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  text: 'サービス概要資料.pdf',
  hasIcon: true,
};
