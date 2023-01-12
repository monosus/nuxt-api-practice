import InputText from '@/components/form/InputText.vue';

export default {
  title: 'Components/Form/InputText',
  component: InputText,
  argTypes: {
    type: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isLarge: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputText },
  setup() {
    return { args }
  },
  template: `
    <InputText v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  name: 'dummy',
  value: '',
  placeholder: 'placeholder',
  isDisabled: false,
  hasError: false,
  isLarge: false,
};
