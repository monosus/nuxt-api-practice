import ModalDefault from '@/components/modal/ModalDefault.vue'

export default {
  title: 'Components/Modal/ModalDefault',
  component: ModalDefault,
  argTypes: {
    isShow: { control: 'boolean' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ModalDefault },
  setup() {
    return { args }
  },
  template: `
    <ModalDefault
      v-bind="args"
      @close="isShow = false"
      >
      <template #body>
        <p>data</p>
      </template>
    </ModalDefault>
  `,
})

export const Default = Template.bind({})
Default.args = {
  isShow: true,
}
