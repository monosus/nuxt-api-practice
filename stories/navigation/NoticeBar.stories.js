import NoticeBar from '@/components/navigation/NoticeBar.vue'

export default {
  title: 'Components/Navigation/NoticeBar',
  component: NoticeBar,
  argTypes: {
    text: { control: 'text' },
    isResponsive: { control: 'boolean' },
    isStaticSp: { control: 'boolean' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NoticeBar },
  setup() {
    return { args }
  },
  template: `<NoticeBar v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  noticeList: [
    {
      link: '#',
      date: '2022.12.31',
      text: 'システムメンテナンスのお知らせ',
    },
    {
      link: '#',
      date: '2022.12.24',
      text: '年末年始の営業時間について【H¹T＆提携店含む全店舗】',
    },
    {
      link: '#',
      date: '2022.12.22',
      text: 'エレベーター点検の実施',
    },
  ],
}
