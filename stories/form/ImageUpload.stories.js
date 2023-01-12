import ImageUpload from '@/components/form/ImageUpload.vue';

export default {
  title: 'Components/Form/ImageUpload',
  component: ImageUpload,
  argTypes: {
    isMultiple: { control: 'boolean' },
    maxFile: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImageUpload },
  setup() {
    return { args }
  },
  template: `<ImageUpload v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  isMultiple: true,
  maxFile: 3
};
