import TableShowCsv from '@/components/table/TableShowCsv.vue';

export default {
  title: 'Components/Table/TableShowCsv',
  component: TableShowCsv,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableShowCsv },
  setup() {
    return { args }
  },
  template: `<TableShowCsv v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  csvData: [
    {
      number: '20000',
      name: '山田 山太郎',
      email: 'yamataro.yamada@worklifeplus.co.jp',
      reason: '必須項目である「項目A」が入力されていません'
    },
    {
      number: '20000',
      name: '山田 山太郎',
      email: 'yamataro.yamada@worklifeplus.co.jp',
      reason: '必須項目である「項目A」が入力されていません'
    },
  ],
};
