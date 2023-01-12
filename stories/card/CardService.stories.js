import CardService from '@/components/card/CardService.vue'

export default {
  title: 'Components/Card/CardService',
  component: CardService,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardService },
  setup() {
    return { args }
  },
  template: `<CardService v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  href:'/',
  src: 'image/common/thumbnail_card_service_01.png',
  title: 'シェアオフィス',
  text: '会社保有の不動産について何でもご相談ください。',
  balloon: '利用無料',
  officeLogo: 'image/common/logo_h1t.png',
  officeName: '野村不動産ソリューションズ',
}
