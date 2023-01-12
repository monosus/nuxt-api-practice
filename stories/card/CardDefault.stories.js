import CardDefault from '@/components/card/CardDefault.vue'

export default {
  title: 'Components/Card/CardDefault',
  component: CardDefault,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardDefault },
  setup() {
    return { args }
  },
  template: `<CardDefault v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  href: '#',
  src: 'image/member/common/thumbnail_card_01.jpg',
  title: 'メータバースやAI・ロボティクスで切り拓くビジネスの…',
  tagText: 'WORK',
  tagStyle: 'gradient-blue',
  date: '2022.12.31',
}
