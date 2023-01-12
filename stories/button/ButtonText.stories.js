import ButtonText from '@/components/button/ButtonText.vue'

export default {
  title: 'Components/Button/ButtonText',
  component: ButtonText,
  argTypes: {
    href: { control: 'text' },
    text: { control: 'text' },
    styles: {
      control: { type: 'select' },
      options: [
        'purple',
        'outline-purple',
        'red',
        'outline-red',
        'black',
        'outline-black',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'xs', 'sm', 'lg'],
    },
    fontSize: {
      control: { type: 'select' },
      options: ['normal', 'small'],
    },
    radius: {
      control: { type: 'select' },
      options: ['normal', 'radius-22'],
    },
    isTargetBlank: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    width: { control: 'text' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonText },
  setup() {
    return { args }
  },
  template: `
    <ButtonText v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  href: '#',
  text: 'お知らせ新規作成',
  styles: 'purple',
  size: '',
  fontSize: '',
  radius: '',
  isTargetBlank: false,
  isDisabled: false,
}
