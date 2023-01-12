import HeaderBar from '@/components/navigation/HeaderBar.vue'
import ButtonText from '@/components/button/ButtonText.vue'

export default {
  title: 'Components/Navigation/HeaderBar',
  component: HeaderBar,
  argTypes: {
    pageTitle: { control: 'text' },
    labelText: { control: 'text' },
    labelStyle: { control: 'text' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderBar, ButtonText },
  setup() {
    return { args }
  },
  template: `<HeaderBar v-bind="args">
    <ButtonText text="登録確認画面へ" styles="purple" />
  </HeaderBar>`,
})

export const Default = Template.bind({})
Default.args = {
  pageTitle: '従業員新規追加',
  labelText: '未対応',
  labelStyle: 'red',
}
