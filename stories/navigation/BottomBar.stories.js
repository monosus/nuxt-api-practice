import BottomBar from '@/components/navigation/BottomBar.vue'
import ButtonText from '@/components/button/ButtonText.vue'

export default {
  title: 'Components/Navigation/BottomBar',
  component: BottomBar,
  argTypes: {
    text: { control: 'text' },
    isResponsive: { control: 'boolean' },
    isStaticSp: { control: 'boolean' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BottomBar, ButtonText },
  setup() {
    return { args }
  },
  template: `<BottomBar v-bind="args">
    <ButtonText text="登録確認画面へ" isDisabled />
  </BottomBar>`,
})

export const Default = Template.bind({})
Default.args = {
  text: '登録確認画面へ',
  isResponsive: false,
  isStaticSp: false,
}
