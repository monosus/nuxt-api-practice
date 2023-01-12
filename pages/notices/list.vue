<template>
  <LayoutMember :current="5">
    <TitleGrid titleEn="News" titleJp="お知らせ" />
    <div class="l-section-member">
      <div class="l-section-member__in">
        <div class="c-form-default__row">
          <div class="c-form-default__select-category">
            <FormGroup label="カテゴリ">
              <SelectBox
                placeholder="すべて"
                :options="['すべて1', 'すべて2', 'すべて3']"
                isLarge
              />
            </FormGroup>
          </div>
        </div>

        <ul class="c-list-card-post _mt-32">
          <li v-for="(item, index) in cardList" :key="index">
            <CardPost v-bind="item" />
          </li>
        </ul>
        <PaginationArea />
      </div>

      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
export default {
  setup() {
    const cardList = [
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_1.jpg`,
          import.meta.url
        ).href,
        tags: [
          { style: 'red', text: '重要' },
          { style: 'black', text: 'ビル' },
        ],
        text: '年末年始の営業時間について【H¹T＆提携店含む全店舗】',
        date: '2022.12.31',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_2.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'クーポン' }],
        text: '【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店',
        date: '2022.12.30',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_default_pc.jpg`,
          import.meta.url
        ).href,
        tags: [
          { style: 'red', text: 'システム' },
          { style: 'black', text: 'クーポン' },
        ],
        text: 'システムメンテナンスのお知らせ',
        date: '2022.12.28',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_4.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'イベント・セミナー' }],
        text: 'THE MODEL 最強の「営業チーム」構築術',
        date: '2022.12.27',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_5.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使える',
        date: '2022.12.26',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_6.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました',
        date: '2022.12.25',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_7.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'イベント・セミナー' }],
        text: 'メータバースやAI・ロボティクスで切り拓くビジネスの未来',
        date: '2022.12.24',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_8.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'クーポン' }],
        text: '【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店',
        date: '2022.12.23',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_1.jpg`,
          import.meta.url
        ).href,
        tags: [
          { style: 'red', text: '重要' },
          { style: 'black', text: 'ビル' },
        ],
        text: 'エレベーター点検の実施',
        date: '2022.12.22',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_10.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました',
        date: '2022.12.21',
      },
    ]

    return {
      cardList,
    }
  },
}
</script>
