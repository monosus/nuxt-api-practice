import BoxShowCsv from '@/components/box/BoxShowCsv.vue'

export default {
  title: 'Components/Box/BoxShowCsv',
  component: BoxShowCsv,
  argTypes: {
    file: { control: 'text' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BoxShowCsv },
  setup() {
    return { args }
  },
  template: `<BoxShowCsv v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  file: 'users_202211011201.csv',
}
