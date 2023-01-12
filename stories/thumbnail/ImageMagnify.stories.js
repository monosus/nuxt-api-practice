import ImageMagnify from '@/components/thumbnail/ImageMagnify.vue';

export default {
  title: 'Components/Thumbnail/ImageMagnify',
  component: ImageMagnify,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImageMagnify },
  setup() {
    return { args }
  },
  template: `<ImageMagnify v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  src: 'image/member/common/banner_service_detail_01.jpg',
};
