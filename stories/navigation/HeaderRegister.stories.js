import HeaderRegister from '@/components/navigation/HeaderRegister.vue';

export default {
  title: 'Components/Navigation/HeaderRegister',
  component: HeaderRegister,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderRegister },
  setup() {
    return { args }
  },
  template: `<HeaderRegister />`,
});

export const Default = Template.bind({});
