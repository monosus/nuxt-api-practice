import ImgThumbnail from '@/components/thumbnail/ImgThumbnail.vue';

export default {
  title: 'Components/Thumbnail/ImgThumbnail',
  component: ImgThumbnail,
  argTypes: {
    src: { control: 'text' },
    hasIcon: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImgThumbnail },
  setup() {
    return { args }
  },
  template: `<ImgThumbnail v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  src: new URL(`@/assets/image/common/thumbnail.jpg`, import.meta.url).href,
  hasIcon: true,
};
