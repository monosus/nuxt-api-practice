import AttachUpload from '@/components/form/AttachUpload.vue';

export default {
  title: 'Components/Form/AttachUpload',
  component: AttachUpload,
  argTypes: {
    maxFile: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AttachUpload },
  setup() {
    return { args }
  },
  template: `<AttachUpload v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  maxFile: 3
};
