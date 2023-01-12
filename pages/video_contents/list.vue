<template>
  <LayoutMember :current="4">
    <TitleGrid titleEn="Video Contents" titleJp="動画コンテンツ" />
    <div class="l-section-member">
      <div class="l-section-member__in">
        <div class="c-tab-service">
          <div class="c-tab-service__link -active">
            <p class="c-tab-service__text">WORK</p>
            <p class="c-tab-service__subtext">ビジネス動画コンテンツ</p>
          </div>
          <div class="c-tab-service__link">
            <p class="c-tab-service__text">LIFE</p>
            <p class="c-tab-service__subtext">ライフスタイル動画コンテンツ</p>
          </div>
        </div>

        <TabList class="_mt-md-32 _mt-sm-40" :tabs="tabs" />

        <ListCardDefault :cards="cards" class="_mt-md-32 _mt-sm-24" />

        <PaginationArea class="_mt-md-80 _mt-sm-48" />
      </div>

      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
import PaginationArea from '~/components/navigation/PaginationArea.vue'
export default {
  components: { PaginationArea },
  setup() {
    useHead({ title: '' })
    const tabs = [
      {
        text: '全て',
        isActive: true,
      },
      { text: '経営' },
      { text: '新規事業' },
      { text: 'DX' },
      { text: 'ビジネススキル' },
      { text: 'その他' },
    ]

    const cards = [
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_01.jpg',
          import.meta.url
        ),
        title: 'メータバースやAI・ロボティクスで切り拓くビジネスの…',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_02.jpg',
          import.meta.url
        ),
        title: '『働きがい』のある組織のつくり方とは？',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_03.jpg',
          import.meta.url
        ),
        title: '最強の「営業チーム」構築術',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_01.jpg',
          import.meta.url
        ),
        title: 'メータバースやAI・ロボティクスで切り拓くビジネスの…',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_02.jpg',
          import.meta.url
        ),
        title: '『働きがい』のある組織のつくり方とは？',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_03.jpg',
          import.meta.url
        ),
        title: '最強の「営業チーム」構築術',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
    ]

    return { tabs, cards }
  },
}
</script>
