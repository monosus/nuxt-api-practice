import LinkItem from '@/components/link/LinkItem.vue';

export default {
  title: 'Components/Link/LinkItem',
  component: LinkItem,
  argTypes: {
    tag: { control: 'text' },
    href: { control: 'text' },
    color: { control: 'text' },
    iconName: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    text: { control: 'text' },
    hasNoUnderline: { control: 'boolean' },
    isFontSm: { control: 'boolean' },
    isTargetBlank: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LinkItem },
  setup() {
    return { args }
  },
  template: `<LinkItem v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  tag: 'a',
  href: '#',
  color: '',
  iconName: 'download',
  position: 'left',
  text: '作業届.xlxs',
  hasNoUnderline: false,
  isFontSm: false,
  isTargetBlank: false,
};
