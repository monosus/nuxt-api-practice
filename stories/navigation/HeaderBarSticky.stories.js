import HeaderBarSticky from '@/components/navigation/HeaderBarSticky.vue'
import ButtonText from '@/components/button/ButtonText.vue'

export default {
  title: 'Components/Navigation/HeaderBarSticky',
  component: HeaderBarSticky,
  argTypes: {
    link: { control: 'text' },
    text: { control: 'text' },
    textSp: { control: 'text' },
    pcHide:{ control: 'boolean' },
    spHide: { control: 'boolean' },
    labelText: { control: 'text' },
    labelStyle: { control: 'text' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderBarSticky, ButtonText },
  setup() {
    return { args }
  },
  template: `<HeaderBarSticky v-bind="args">
    <ButtonText text="編集を中止する" styles="outline-red" />
  </HeaderBarSticky>`,
})

export const Default = Template.bind({})
Default.args = {
  link: '#',
  text: '作業届',
  textSp: '編集画面',
  pcHide: false,
  spHide: false,
  labelText: '新規作成',
  labelStyle: 'red',
}
