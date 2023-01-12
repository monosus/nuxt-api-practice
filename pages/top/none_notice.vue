<template>
  <LayoutMember :current="1">
    <div class="p-top-favorite-bg">
      <span class="p-top-favorite-bg__triangle-01" />
      <span class="p-top-favorite-bg__triangle-02" />
      <div class="p-top-section-line">
        <div class="p-top-section-line__in _pt-md-32">
          <NoticeBar
            v-if="noticeList.length > 0"
            :noticeList="noticeList"
            class="_mb-md-32 _mb-sm-20"
          />

          <div
            class="p-top-horizon-line"
            :class="{ '_mt-md-35': noticeList.length > 0 }"
          >
            <TitleEngLink titleEn="Favorite" titleJp="お気に入り一覧" />
          </div>

          <div class="p-top-horizon-line">
            <ListCardFavoriteSlider
              class="_mt-20"
              :favoriteList="favoriteList"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="p-top-section-line">
      <div class="p-top-section-line__in _pt-md-105 _pt-sm-80">
        <div class="p-top-horizon-line">
          <TitleEngLink
            titleEn="News"
            titleJp="お知らせ"
            link="#"
            linkText="お知らせ一覧"
          />
        </div>

        <ul class="p-top-list-news">
          <li v-for="(item, index) in newsList" :key="index">
            <div class="p-top-horizon-line">
              <CardPost v-bind="item" isTop />
            </div>
          </li>
        </ul>
        <div class="_d-md-none _ta-right _mt-24">
          <LinkItem
            href="#"
            text="お知らせ一覧"
            hasNoUnderline
            position="right"
            iconName="arrow_right_purple_small"
          />
        </div>
      </div>
    </div>

    <div class="p-top-video-bg">
      <div class="p-top-section-line">
        <div class="p-top-section-line__in _pt-md-105 _pt-sm-80">
          <div class="p-top-horizon-line">
            <TitleEngLink
              titleEn="Video Contents"
              titleJp="動画コンテンツ"
              link="#"
              linkText="動画コンテンツ一覧"
            />
          </div>

          <div class="p-top-list-video">
            <div class="p-top-list-video__in">
              <ul class="p-top-list-video__list">
                <li v-for="(item, index) in videoList" :key="index">
                  <CardDefault v-bind="item" />
                </li>
              </ul>
            </div>
          </div>
          <div class="_d-md-none _ta-right">
            <LinkItem
              href="#"
              text="動画コンテンツ一覧"
              hasNoUnderline
              position="right"
              iconName="arrow_right_purple_small"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="p-top-section-line">
      <div class="p-top-section-line__in _pt-80">
        <div class="p-top-horizon-line">
          <TitleEngLink
            titleEn="Coupon"
            titleJp="クーポン"
            link="#"
            linkText="クーポン一覧"
          />
        </div>

        <div class="p-top-coupon-slider">
          <div class="p-top-horizon-line">
            <div class="p-top-coupon-slider__in">
              <Swiper v-bind="swiperOptions" @swiper="setSwiperEl">
                <SwiperSlide v-for="(item, index) in couponList" :key="index">
                  <CardCoupon v-bind="item" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div class="p-top-coupon-slider__lower">
            <div class="p-top-coupon-slider__pagination" />
            <div class="p-top-coupon-slider__link">
              <LinkItem
                href="#"
                text="クーポン一覧"
                hasNoUnderline
                position="right"
                iconName="arrow_right_purple_small"
              />
            </div>
          </div>
        </div>

        <div class="p-top-horizon-line _d-sm-none">
          <div class="p-top-coupon-control">
            <button
              class="p-top-coupon-control__prev"
              @click.prevent="goToPrevCoupon"
            />
            <button
              class="p-top-coupon-control__next"
              @click.prevent="goToNextCoupon"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="p-top-section-line">
      <div class="p-top-section-line__in _pt-md-105 _pt-sm-80">
        <div class="p-top-horizon-line">
          <TitleEngLink titleEn="Service" titleJp="サービス" />
        </div>

        <div class="p-top-horizon-line">
          <div class="p-top-service-banner">
            <a href="#" class="p-top-service-banner__card">
              <figure class="p-top-service-banner__image">
                <img
                  src="@/assets/image/member/common/img_service_banner_01.jpg"
                  width="400"
                  height="160"
                  decoding="async"
                  alt=""
                />
              </figure>
              <div class="p-top-service-banner__info">
                <p class="p-top-service-banner__title">WORK</p>
                <p class="p-top-service-banner__text">
                  ビジネス向けサービス一覧
                </p>
              </div>
            </a>

            <a href="#" class="p-top-service-banner__card">
              <figure class="p-top-service-banner__image">
                <img
                  src="@/assets/image/member/common/img_service_banner_02.jpg"
                  width="400"
                  height="160"
                  decoding="async"
                  alt=""
                />
              </figure>
              <div class="p-top-service-banner__info">
                <p class="p-top-service-banner__title">LIFE</p>
                <p class="p-top-service-banner__text">
                  ライフスタイル向けサービス一覧
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="p-top-section-line -footer">
      <div class="p-top-section-line__in _pt-md-105 _pt-sm-80">
        <NavFooter />
      </div>
    </div>
  </LayoutMember>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    useHead({ title: '' })

    const isSP = ref(false)
    const swiperEl = ref(null)
    const swiperOptions = {
      modules: [Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      resistanceRatio: 0,
      pagination: {
        el: '.p-top-coupon-slider__pagination',
        clickable: true,
      },
      breakpoints: {
        897: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    }

    const noticeList = []
    const newsList = [
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_1.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '年末年始の営業時間について【H¹T＆提携店含む全店舗】',
        date: '2022.12.27',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_news_01.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'クーポン' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるように',
        date: '2022.12.26',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_news_02.jpg`,
          import.meta.url
        ).href,
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました',
        date: '2022.12.25',
      },
    ]
    const favoriteList = [
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_01.png',
          import.meta.url
        ).href,
        name: 'H¹T',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_02.png',
          import.meta.url
        ).href,
        name: 'スポーツジム',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_03.png',
          import.meta.url
        ).href,
        name: 'ワークコンシェルジュ',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_04.png',
          import.meta.url
        ).href,
        name: '企業不動産コンシェルジュ',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_05.png',
          import.meta.url
        ).href,
        name: 'ライフコンシェルジュ',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_06.png',
          import.meta.url
        ).href,
        name: '住まいコンシェルジュルジュ',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_07.png',
          import.meta.url
        ).href,
        name: 'サービス名',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_07.png',
          import.meta.url
        ).href,
        name: 'サービス名',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_07.png',
          import.meta.url
        ).href,
        name: 'サービス名',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_07.png',
          import.meta.url
        ).href,
        name: 'サービス名',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_07.png',
          import.meta.url
        ).href,
        name: 'サービス名',
      },
      {
        image: new URL(
          '@/assets/image/member/common/img_favorite_07.png',
          import.meta.url
        ).href,
        name: 'サービス名',
      },
    ]
    const videoList = [
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_01.jpg',
          import.meta.url
        ).href,
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
        ).href,
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
        ).href,
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
        ).href,
        title: 'メータバースやAI・ロボティクスで切り拓くビジネスの…',
        tagText: 'LIFE',
        tagStyle: 'gradient-orange',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_04.jpg',
          import.meta.url
        ).href,
        title: '『働きがい』のある組織のつくり方とは？',
        tagText: 'LIFE',
        tagStyle: 'gradient-orange',
        date: '2022.12.31',
      },
      {
        href: '#',
        src: new URL(
          '@/assets/image/member/common/thumbnail_card_07.jpg',
          import.meta.url
        ).href,
        title: '最強の「営業チーム」構築術',
        tagText: 'LIFE',
        tagStyle: 'gradient-orange',
        date: '2022.12.31',
      },
    ]
    const couponList = [
      {
        href: '/',
        image: new URL(
          '@/assets/image/common/thumbnail_card_coupon_01.jpg',
          import.meta.url
        ).href,
        text: '【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店 YUITO 銀座しゃ【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店 YUITO',
      },
      {
        href: '/',
        image: new URL(
          '@/assets/image/common/thumbnail_card_coupon_02.jpg',
          import.meta.url
        ).href,
        text: '【10%OFF】文明堂東京・日本橋本店',
      },
      {
        href: '/',
        image: new URL(
          '@/assets/image/common/thumbnail_card_coupon_01.jpg',
          import.meta.url
        ).href,
        text: '【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店 YUITO 銀座しゃ【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店 YUITO',
      },
      {
        href: '/',
        image: new URL(
          '@/assets/image/common/thumbnail_card_coupon_02.jpg',
          import.meta.url
        ).href,
        text: '【10%OFF】文明堂東京・日本橋本店',
      },
    ]

    const setSwiperEl = (swiper) => {
      swiperEl.value = swiper
    }

    const goToPrevCoupon = () => {
      swiperEl.value.slidePrev()
    }

    const goToNextCoupon = () => {
      swiperEl.value.slideNext()
    }

    const checkMediaQuery = (event) => {
      isSP.value = event.matches
    }

    onMounted(() => {
      const mq = window.matchMedia('(max-width: 896px)')
      mq.addEventListener('change', checkMediaQuery)
      isSP.value = mq.matches
    })

    return {
      isSP,
      swiperOptions,
      noticeList,
      newsList,
      favoriteList,
      videoList,
      couponList,
      setSwiperEl,
      goToPrevCoupon,
      goToNextCoupon,
    }
  },
}
</script>
