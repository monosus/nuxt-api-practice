import BannerService from '@/components/thumbnail/BannerService.vue';

export default {
  title: 'Components/Thumbnail/BannerService',
  component: BannerService,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BannerService },
  setup() {
    return { args }
  },
  template: `<BannerService v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  src: 'image/member/common/hero_list_life.jpg',
  title: 'LIFEコンシェルジュ',
  subtitle: 'Life Concierge',
  text: '「暮らし」に関して何でもご相談ください',
  officeLogo: 'image/common/logo_tpo.png',
  officeName: 'TPO',
  type: 'life',
};
