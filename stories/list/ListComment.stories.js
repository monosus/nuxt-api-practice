import ListComment from '@/components/list/ListComment.vue'

export default {
  title: 'Components/List/ListComment',
  component: ListComment,
  argTypes: {
    comments: {
      control: { type: 'object' },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListComment },
  setup() {
    return { args }
  },
  template: `
    <ListComment v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  comments: [
    {
      text: 'こちら今回不要な申請書となりますので、取り消しをさせていただきました。',
      date: '2022/12/21',
      author: 'ビル管理会社',
    },
    {
      text: '申請内容のご確認のほど宜しくお願い申し上げます。',
      date: '2022/12/20',
      author: '申請者：山田 山太郎',
    },
  ],
}
