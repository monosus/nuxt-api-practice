import TitleTable from '@/components/title/TitleTable.vue';

export default {
  title: 'Components/Title/TitleTable',
  component: TitleTable,
  argTypes: {
    total: { control: 'text' },
    page: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TitleTable },
  setup() {
    return { args }
  },
  template: `<TitleTable v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  total: '9,999',
  page: '1-50',
};
