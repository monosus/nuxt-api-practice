import TitleGrid from '@/components/title/TitleGrid.vue';

export default {
  title: 'Components/Title/TitleGrid',
  component: TitleGrid,
  argTypes: {
    titleEn: { control: 'text' },
    titleJp: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TitleGrid },
  setup() {
    return { args }
  },
  template: `<TitleGrid v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  titleEn: 'Tools & Documents of Office Buildings',
  titleJp: 'ビル関連',
};
