import ListCardDefault from '@/components/list/ListCardDefault.vue'

export default {
  title: 'Components/List/ListCardDefault',
  component: ListCardDefault,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListCardDefault },
  setup() {
    return { args }
  },
  template: `<ListCardDefault v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  cards: [
    {
      href: '#',
      src: new URL(
        '@/assets/image/member/common/thumbnail_card_01.jpg',
        import.meta.url
      ),
      title: 'メータバースやAI・ロボティクスで切り拓くビジネスの…',
      tagText: 'WORK',
      tagStyle: 'gradient-blue',
      date: '2022.12.31',
    },
    {
      href: '#',
      src: new URL(
        '@/assets/image/member/common/thumbnail_card_02.jpg',
        import.meta.url
      ),
      title: '『働きがい』のある組織のつくり方とは？',
      tagText: 'WORK',
      tagStyle: 'gradient-blue',
      date: '2022.12.31',
    },
    {
      href: '#',
      src: new URL(
        '@/assets/image/member/common/thumbnail_card_03.jpg',
        import.meta.url
      ),
      title: '最強の「営業チーム」構築術',
      tagText: 'WORK',
      tagStyle: 'gradient-blue',
      date: '2022.12.31',
    },
    {
      href: '#',
      src: new URL(
        '@/assets/image/member/common/thumbnail_card_01.jpg',
        import.meta.url
      ),
      title: 'メータバースやAI・ロボティクスで切り拓くビジネスの…',
      tagText: 'WORK',
      tagStyle: 'gradient-blue',
      date: '2022.12.31',
    },
    {
      href: '#',
      src: new URL(
        '@/assets/image/member/common/thumbnail_card_02.jpg',
        import.meta.url
      ),
      title: '『働きがい』のある組織のつくり方とは？',
      tagText: 'WORK',
      tagStyle: 'gradient-blue',
      date: '2022.12.31',
    },
    {
      href: '#',
      src: new URL(
        '@/assets/image/member/common/thumbnail_card_03.jpg',
        import.meta.url
      ),
      title: '最強の「営業チーム」構築術',
      tagText: 'WORK',
      tagStyle: 'gradient-blue',
      date: '2022.12.31',
    },
  ],
}
