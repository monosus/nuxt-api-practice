import CardCoupon from '@/components/card/CardCoupon.vue'

export default {
  title: 'Components/Card/CardCoupon',
  component: CardCoupon,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardCoupon },
  setup() {
    return { args }
  },
  template: `<CardCoupon v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  href:'/',
  image: new URL(
    '@/assets/image/common/thumbnail_card_coupon_01.jpg',
    import.meta.url
  ).href,
  text: '【10%OFF】文明堂東京・日本橋本店',
}
