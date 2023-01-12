import ListThumbnail from '@/components/thumbnail/ListThumbnail.vue';

export default {
  title: 'Components/Thumbnail/ListThumbnail',
  component: ListThumbnail,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListThumbnail },
  setup() {
    return { args }
  },
  template: `<ListThumbnail v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  imgUploads: [
    {
      src: new URL(`@/assets/image/common/thumbnail.jpg`, import.meta.url).href,
      hasIcon: true,
    },
    {
      src: new URL(`@/assets/image/common/thumbnail.jpg`, import.meta.url).href,
      hasIcon: true,
    },
    {
      src: new URL(`@/assets/image/common/thumbnail.jpg`, import.meta.url).href,
      hasIcon: true,
    },
  ],
};
