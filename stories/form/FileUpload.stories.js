import FileUpload from '@/components/form/FileUpload.vue';

export default {
  title: 'Components/Form/FileUpload',
  component: FileUpload,
  argTypes: {
    maxSize: { control: 'number' },
    isError: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FileUpload },
  setup() {
    return { args }
  },
  template: `<FileUpload v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  maxSize: 300,
  isError: false,
};
