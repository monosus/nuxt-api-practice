import ButtonResult from '@/components/button/ButtonResult.vue';

export default {
  title: 'Components/Button/ButtonResult',
  component: ButtonResult,
  argTypes: {
    text: { control: 'text' },
    styles: {
      control: { type: 'select' },
      options: ['normal', 'purple', 'gray'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonResult },
  setup() {
    return { args }
  },
  template: `<ButtonResult v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  text: 'PMO EX 日本橋茅場町',
  styles: '',
};
