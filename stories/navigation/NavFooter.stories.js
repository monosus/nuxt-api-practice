import NavFooter from '@/components/navigation/NavFooter.vue';

export default {
  title: 'Components/Navigation/NavFooter',
  component: NavFooter,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavFooter },
  setup() {
    return { args }
  },
  template: `<NavFooter />`,
});

export const Default = Template.bind({});
