import LogoOffice from '@/components/text/LogoOffice.vue';

export default {
  title: 'Components/Text/LogoOffice',
  component: LogoOffice,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LogoOffice },
  setup() {
    return { args }
  },
  template: `<LogoOffice v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  src: 'image/common/logo_h1t.png',
  name: 'H1T',
  size: '',
  color: '',
};
