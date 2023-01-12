import TabList from '@/components/tab/TabList.vue'

export default {
  title: 'Components/Tab/TabList',
  component: TabList,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TabList },
  setup() {
    return { args }
  },
  template: `<TabList v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  tabs: [
    {
      text: '全て',
      isActive: true,
    },
    { text: '経営' },
    { text: '新規事業' },
    { text: 'DX' },
    { text: 'ビジネススキル' },
    { text: 'その他' },
  ],
}
