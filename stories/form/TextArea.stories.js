import TextArea from '@/components/form/TextArea.vue';

export default {
  title: 'Components/Form/TextArea',
  component: TextArea,
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['normal', 'sm', 'lg'],
    },
    isDisabled: { control: 'boolean' },
    hasNoResize: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextArea },
  setup() {
    return { args }
  },
  template: `<TextArea v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  name: 'dummy',
  value: '',
  placeholder: 'placeholder',
  size: '',
  isDisabled: false,
  hasNoResize: false,
  hasError: false,
};
