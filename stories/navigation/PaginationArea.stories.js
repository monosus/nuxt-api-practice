import PaginationArea from '@/components/navigation/PaginationArea.vue';

export default {
  title: 'Components/Navigation/PaginationArea',
  component: PaginationArea,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PaginationArea },
  template: `<PaginationArea />`,
});

export const Default = Template.bind({});
