import FormGroup from '@/components/form/FormGroup.vue'

export default {
  title: 'Components/Form/FormGroup',
  component: FormGroup,
  argTypes: {
    label: { control: 'text' },
    sub: { control: 'text' },
    caution: { control: 'text' },
    suggestText: { control: 'text' },
    errorText: { control: 'text' },
    space: {
      control: { type: 'select' },
      options: ['normal', 'md', 'lg'],
    },
    isOptional: { control: 'boolean' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormGroup },
  setup() {
    return { args }
  },
  template: `<FormGroup v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  label: '苗字（漢字）',
  sub: '',
  caution: '',
  suggestText: '',
  errorText: '入力してください',
  space: '',
  isOptional: false,
}
