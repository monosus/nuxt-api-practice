import CardFavorite from '@/components/card/CardFavorite.vue'

export default {
  title: 'Components/Card/CardFavorite',
  component: CardFavorite,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardFavorite },
  setup() {
    return { args }
  },
  template: `<CardFavorite v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  link: '#',
  image: new URL(
    '@/assets/image/member/common/img_favorite_01.png',
    import.meta.url
  ).href,
  name: 'H¹T',
}
