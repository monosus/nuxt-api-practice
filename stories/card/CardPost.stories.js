import CardPost from '@/components/card/CardPost.vue'

export default {
  title: 'Components/Card/CardPost',
  component: CardPost,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardPost },
  setup() {
    return { args }
  },
  template: `<CardPost v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  link: '#',
  src: 'image/member/common/img_card_post_sp_1.jpg',
  tags: [{ style: 'black', text: 'お知らせ' }],
  text: '年末年始の営業時間について【H¹T＆提携店含む全店舗】',
  date: '2022.12.27',
  isTop: false,
}
