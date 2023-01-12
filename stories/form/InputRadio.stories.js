import InputRadio from '@/components/form/InputRadio.vue';

export default {
  title: 'Components/Form/InputRadio',
  component: InputRadio,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    isChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    text: { control: 'text' },
    isLarge: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputRadio },
  setup() {
    return { args }
  },
  template: `
    <InputRadio v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'dummy',
  name: '',
  value: '',
  isChecked: false,
  isDisabled: false,
  text: '公開',
  isLarge: false,
};
