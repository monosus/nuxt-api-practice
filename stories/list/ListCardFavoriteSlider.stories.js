import ListCardFavoriteSlider from '@/components/list/ListCardFavoriteSlider.vue'

export default {
  title: 'Components/List/ListCardFavoriteSlider',
  component: ListCardFavoriteSlider,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListCardFavoriteSlider },
  setup() {
    return { args }
  },
  template: `<ListCardFavoriteSlider v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  favoriteList: [
    {
      image: new URL(
        '@/assets/image/member/common/img_favorite_01.png',
        import.meta.url
      ),
      name: 'H¹T',
    },
    {
      image: new URL(
        '@/assets/image/member/common/img_favorite_02.png',
        import.meta.url
      ),
      name: 'スポーツジム',
    },
    {
      image: new URL(
        '@/assets/image/member/common/img_favorite_03.png',
        import.meta.url
      ),
      name: 'ワークコンシェルジュ',
    },
    {
      image: new URL(
        '@/assets/image/member/common/img_favorite_04.png',
        import.meta.url
      ),
      name: '企業不動産コンシェルジュ',
    },
    {
      image: new URL(
        '@/assets/image/member/common/img_favorite_05.png',
        import.meta.url
      ),
      name: 'ライフコンシェルジュ',
    },
    {
      image: new URL(
        '@/assets/image/member/common/img_favorite_06.png',
        import.meta.url
      ),
      name: '住まいコンシェルジュルジュ',
    },
    {
      image: new URL(
        '@/assets/image/member/common/img_favorite_07.png',
        import.meta.url
      ),
      name: 'サービス名',
    },
  ],
}
