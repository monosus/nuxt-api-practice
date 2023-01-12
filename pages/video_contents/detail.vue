<template>
  <LayoutMember :current="4">
    <div class="c-title-bar">
      <div class="l-section-member">
        <div class="l-section-member__in _pt-sm-0">
          <div class="c-box-notices-detail">
            <div class="c-video-detail">
              <video width="320" height="240" controls preload="metadata">
                <source
                  src="@/assets/video/detail/video_detail.mp4#t=0.001"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="c-box-heading-detail _mt-32">
              <h2 class="c-box-heading-detail__heading">
                メタバースやAI・ロボティクスで切り拓くビジネスの未来
              </h2>
              <div class="c-box-heading-detail__under">
                <div class="c-box-heading-detail__tag">
                  <div class="c-box-heading-detail__item">
                    <LabelTag text="WORK" styles="gradient-blue" isRadiusSm />
                  </div>
                </div>
              </div>
              <span class="c-box-heading-detail__date">2022.12.31公開</span>
            </div>
            <div class="c-box-text-detail -small">
              <TextDefault tag="div" fontSize="16" lineHeight="1.625">
                今回のテーマは「『働きがい』のある組織のつくり方」。健康社会学者の河合薫さんと働き方評論家の常見陽平さんが、日本における”ジョブ型雇用”の誤解や”週休3日制”の意外な落とし穴、さらには”新卒一括採用”の是非について、それぞれの主張を展開します。日本企業、そして社会が変わるための第一歩とは？
              </TextDefault>
              <ul class="c-box-text-detail__tag">
                <li class="c-box-text-detail__item">
                  <LinkItem href="#" text="#SDGs" />
                </li>
                <li class="c-box-text-detail__item">
                  <LinkItem href="#" text="#新規事業" />
                </li>
                <li class="c-box-text-detail__item">
                  <LinkItem href="#" text="#DX" />
                </li>
              </ul>
            </div>
            <TitleBorder class="_mt-90 _mt-sm-80" tag="h2"
              >関連動画コンテンツ</TitleBorder
            >
            <ListCardDefault :cards="cards" class="_mt-md-32 _mt-sm-24" />
          </div>
        </div>

        <NavFooter />
      </div>
    </div>
  </LayoutMember>
</template>

<script>
export default {
  setup() {
    useHead({ title: '' })

    const cards = [
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_01.jpg',
          import.meta.url
        ),
        title: 'メタバースやAI・ロボティクスで切り拓くビジネスの未来',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_04.jpg',
          import.meta.url
        ),
        title: '『働きがい』のある組織のつくり方とは？',
        tagText: 'LIFE',
        tagStyle: 'gradient-orange',
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
          '@/assets/image/member/common/thumbnail_card_05.jpg',
          import.meta.url
        ),
        title: '『働きがい』のある組織のつくり方とは？',
        tagText: 'WORK',
        tagStyle: 'gradient-orange',
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
          '@/assets/image/member/common/thumbnail_card_07.jpg',
          import.meta.url
        ),
        title: '最強の「営業チーム」構築術',
        tagText: 'WORK',
        tagStyle: 'gradient-orange',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_04.jpg',
          import.meta.url
        ),
        title: '『働きがい』のある組織のつくり方とは？',
        tagText: 'LIFE',
        tagStyle: 'gradient-orange',
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
        title: 'メタバースやAI・ロボティクスで切り拓くビジネスの未来',
        tagText: 'WORK',
        tagStyle: 'gradient-blue',
        date: '2022.12.31',
      },
    ]

    return { cards }
  },
}
</script>
