import TitleEngLink from '@/components/title/TitleEngLink.vue'

export default {
  title: 'Components/Title/TitleEngLink',
  component: TitleEngLink,
  argTypes: {
    titleEn: { control: 'text' },
    titleJp: { control: 'text' },
    link: { control: 'text' },
    linkText: { control: 'text' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TitleEngLink },
  setup() {
    return { args }
  },
  template: `<TitleEngLink v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  titleEn: 'Favorite',
  titleJp: 'お気に入り一覧',
  link: '#',
  linkText: 'お知らせ一覧',
}
