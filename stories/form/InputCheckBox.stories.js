import InputCheckbox from '@/components/form/InputCheckbox.vue';

export default {
  title: 'Components/Form/InputCheckbox',
  component: InputCheckbox,
  argTypes: {
    id: { control: 'text' },
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
  components: { InputCheckbox },
  setup() {
    return { args }
  },
  template: `
    <InputCheckbox v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: '1',
  name: '',
  value: '',
  isChecked: false,
  isDisabled: false,
  text: '一般',
  isLarge: false,
};
