import HeaderBarStatic from '@/components/navigation/HeaderBarStatic.vue'

export default {
  title: 'Components/Navigation/HeaderBarStatic',
  component: HeaderBarStatic,
  argTypes: {
    text: { control: 'text' },
    textSp: { control: 'text' },
    labelText: { control: 'text' },
    labelStyle: { control: 'text' },
    noSticky: { control: 'boolean' },
    spHide: { control: 'boolean' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderBarStatic },
  setup() {
    return { args }
  },
  template: `<HeaderBarStatic v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  text: 'A-1000002 / （親申請になった何かしらの）届',
  textSp: 'A-1000002 / 作業届',
  labelText: '承認済み',
  labelStyle: 'purple',
  noSticky: false,
  spHide: false,
}
