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
              <CardPost
                v-bind="item"
                :tags="[{ style: 'black', text: item.tag }]"
                :date="format(new Date(item.createdAt), 'yyyy.MM.dd')"
                isTop
              />
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
                  <CardDefault
                    v-bind="item"
                    :date="format(new Date(item.createdAt), 'yyyy.MM.dd')"
                  />
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
import { format } from 'date-fns'
import axiosClient from '@/lib/axiosClient'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  async setup() {
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

    const {
      data: {
        data: { newses: newsList },
      },
    } = await axiosClient.post(null, {
      query: `query MyQuery {
        newses(last: 5) {
          text
          link
          src
          tag
          createdAt
        }
      }`,
    })

    const {
      data: {
        data: { notices: noticeList },
      },
    } = await axiosClient.post(null, {
      query: `query MyQuery {
        notices {
          link
          text
          date
        }
      }`,
    })

    const {
      data: {
        data: { favorites: favoriteList },
      },
    } = await axiosClient.post(null, {
      query: `query MyQuery {
        favorites {
          link
          image
          name
        }
      }`,
    })

    const {
      data: {
        data: { videos: videoList },
      },
    } = await axiosClient.post(null, {
      query: `query MyQuery {
        videos(last: 6) {
          href
          src
          title
          tagText
          tagStyle
          createdAt
        }
      }`,
    })

    const {
      data: {
        data: { coupons: couponList },
      },
    } = await axiosClient.post(null, {
      query: `query MyQuery {
        coupons(last: 4) {
          href
          image
          text
        }
      }`,
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
      format,
    }
  },
}
</script>
