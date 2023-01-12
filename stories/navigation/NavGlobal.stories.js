import NavGlobal from '@/components/navigation/NavGlobal.vue';

export default {
  title: 'Components/Navigation/NavGlobal',
  component: NavGlobal,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavGlobal },
  setup() {
    return { args }
  },
  template: `<NavGlobal />`,
});

export const Default = Template.bind({});
