import TextDefault from '../../components/text/TextDefault.vue'

export default {
  title: 'Components/Text/TextDefault',
  component: TextDefault,
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p'],
    },
    fontSize: { control: 'text' },
    lineHeight: { control: 'text' },
    isBold: { control: 'boolean' },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    color: {
      control: { type: 'select' },
      options: ['red', 'gray'],
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextDefault },
  setup() {
    return { args }
  },
  template: `
    <TextDefault
      v-bind="args"
    >登録内容確認画面</TextDefault>
  `,
})

export const Default = Template.bind({})
Default.args = {
  fontSize: '16',
  lineHeight: '1',
  isBold: false,
  align: null,
  color: null,
}
