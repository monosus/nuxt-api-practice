import NavGlobalMember from '@/components/navigation/NavGlobalMember.vue';

export default {
  title: 'Components/Navigation/NavGlobalMember',
  component: NavGlobalMember,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavGlobalMember },
  setup() {
    return { args }
  },
  template: `<NavGlobalMember />`,
});

export const Default = Template.bind({});
