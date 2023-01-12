import BoxMemo from '@/components/box/BoxMemo.vue';

export default {
  title: 'Components/Box/BoxMemo',
  component: BoxMemo,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BoxMemo },
  template: `<BoxMemo />`,
});

export const Default = Template.bind({});
