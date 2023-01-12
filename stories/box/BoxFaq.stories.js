import BoxFaq from '@/components/box/BoxFaq.vue';

export default {
  title: 'Components/Box/BoxFaq',
  component: BoxFaq,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BoxFaq },
  setup() {
    return { args }
  },
  template: `
    <BoxFaq>
      <template #question>
        パスワードを忘れてしまった場合
      </template>
      <template #answer>
        <div class="c-box-answer">
          予約時間のキャンセルは予約開始時間の5分前、短縮は予約枠利用開始の5分前まで可能です。<br />
          例えば、11時30分まで予約しており、11時15分までに短縮したい場合は11時9分59秒までであれば変更可能です。
        </div>
      </template>
    <BoxFaq />
  `,
});

export const Default = Template.bind({});
