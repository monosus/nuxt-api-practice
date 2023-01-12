import CsvUpload from '@/components/form/CsvUpload.vue';

export default {
  title: 'Components/Form/CsvUpload',
  component: CsvUpload,
  argTypes: {
    maxSize: { control: 'number' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CsvUpload },
  setup() {
    return { args }
  },
  template: `<CsvUpload v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  maxSize: 300
};
