import ButtonIcon from '@/components/button/ButtonIcon.vue';

export default {
  title: 'Components/Button/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    href: { control: 'text' },
    styles: {
      control: { type: 'select' },
      options: ['purple', 'outline-purple',],
    },
    iconName: { control: 'text' },
    text: { control: 'text' },
    isTargetBlank: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonIcon },
  setup() {
    return { args }
  },
  template: `
    <ButtonIcon v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  href: '#',
  styles: 'purple',
  iconName: '',
  text: '作業届',
  isTargetBlank: false,
};
