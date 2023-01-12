import ButtonFavorite from '@/components/button/ButtonFavorite.vue'

export default {
  title: 'Components/Button/ButtonFavorite',
  component: ButtonFavorite,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonFavorite },
  setup() {
    return { args }
  },
  template: `
    <ButtonFavorite v-bind="args" />
  `,
})

export const Default = Template.bind({});
Default.args = {
  text: 'お気に入り登録',
  textActive: 'お気に入り登録済',
  isFavorite: false,
};
