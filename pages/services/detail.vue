<template>
  <LayoutMember :current="2" spHide>
    <HeaderBarSticky link="#" text="シェアオフィス" pcHide>
      <ButtonFavorite />
    </HeaderBarSticky>

    <div class="c-title-bar">
      <div class="l-section-member">
        <div class="l-section-member__in _pt-sm-0">
          <div class="c-banner-hero-service">
            <figure class="c-banner-hero-service__figure">
              <img
                src="@/assets/image/member/common/banner_service_detail_01.jpg"
                alt=""
                class="c-banner-hero-service__image"
                decoding="async"
              />
            </figure>
            <div class="c-banner-hero-service__cover">
              <div class="c-banner-hero-service__heading">
                <h2 class="c-banner-hero-service__title">シェアオフィス</h2>
                <p class="c-banner-hero-service__text">Share Office</p>
              </div>
              <div class="c-banner-hero-service__label">
                <LabelText text="利用無料" isLarge />
              </div>
            </div>
          </div>
          <div class="c-box-heading-service">
            <h2 class="c-box-heading-service__title">
              集中も休憩も自分のペースで。 <br />自由なシェアオフィス。
            </h2>
            <p class="c-box-heading-service__text">
              WORK-LIFE
              PLUSでは、より一層みなさまにより便利にご活用いただけるよう、2022年XX月XX日（木）に新サービス『XXXXXXXX』を導入いたします。
              新しいサービスをご利用いただくにあたり、WORK-LIFE
              PLUSのユーザーサイトより、お手続きをお願いいたします。お客様のお手続きに必要な情報をお知らせいたします。
            </p>
            <LogoOffice
              src="image/common/logo_h1t.png"
              name="H1T"
              size="md"
              class="c-box-heading-service__office"
            />
            <div class="c-list-image-zoom c-box-heading-service__list-image">
              <div class="c-list-image-zoom__in">
                <Swiper v-bind="swiperOptions">
                  <SwiperSlide>
                    <ImageMagnify
                      src="image/member/common/banner_service_detail_01.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ImageMagnify
                      src="image/member/common/thumbnail_service_detail_02.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ImageMagnify
                      src="image/member/common/thumbnail_service_detail_03.jpg"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <ButtonIcon
              href="#"
              text="もっと詳しく見る"
              isTargetBlank
              class="c-box-heading-service__button"
            />
            <LinkItem
              href="#"
              text="H1Tのサイトを見る"
              isTargetBlank
              class="c-box-heading-service__link"
            />
          </div>
          <div class="c-box-detail-service">
            <TitleBorder tag="h3">特典</TitleBorder>
            <TextDefault tag="h4" fontSize="20" isBold class="_mt-48">
              初回1時間無料
            </TextDefault>
            <p class="_mt-24">
              WORK-LIFE
              PLUSでは、より一層みなさまにより便利にご活用いただけるよう、2022年XX月XX日（木）に新サービス『XXXXXXXX』を導入いたします。新しいサービスをご利用いただくにあたり、WORK-LIFE
              PLUSのユーザーサイトより、お手続きをお願いいたします。
            </p>
            <TextDefault tag="h4" fontSize="20" isBold class="_mt-48"
              >特典1特典1特典1特典1特典1特典1特典1</TextDefault
            >
            <p class="_mt-24">
              WORK-LIFE 特典1特典1特典1特典1特典1特典1特典1-LIFE
              PLUSのユーザーサイトより、お手続きをお願いいたします。
            </p>
          </div>
          <div class="c-box-detail-service">
            <TitleBorder tag="h3">利用方法</TitleBorder>
            <ol class="c-list-service-order _mt-48">
              <li class="c-list-service-order__item">
                <p class="c-list-service-order__title">手順1手順1手順1</p>
                <div class="c-list-service-order__detail">
                  <p class="c-list-service-order__text">
                    WORK-LIFE
                    PLUSでは、より一層みなさまにより便利にご活用いただけるよう、2022年XX月XX日（木）に新サービス『XXXXXXXX』を導入いたします。新しいサービスをご利用いただくにあたり、WORK-LIFE
                    PLUSのユーザーサイトより、お手続きをお願いいたします。
                  </p>
                  <ul class="c-list-bullet _mt-32">
                    <li class="c-list-bullet__item">
                      ◯◯◯◯◯◯と◯◯◯◯◯◯◯をお手元にご用意ください
                    </li>
                    <li class="c-list-bullet__item">
                      当ページの「利用する」ボタンから、または<a href="#"
                        >こちら</a
                      >からメール連携登録を行ってください
                    </li>
                    <li class="c-list-bullet__item">
                      届いたメールの手順に沿って対応し、サービス利用を開始してください
                    </li>
                  </ul>
                </div>
              </li>
              <li class="c-list-service-order__item">
                <p class="c-list-service-order__title">手順2手順2手順2</p>
                <div class="c-list-service-order__detail">
                  <p class="c-list-service-order__text">
                    WORK-LIFE
                    PLUSでは、より一層みなさまにより便利にご活用いただけるよう、2022年XX月XX日（木）に新サービス『XXXXXXXX』を導入いたします。新しいサービスをご利用いただくにあたり、WORK-LIFE
                    PLUSのユーザーサイトより、お手続きをお願いいたします。
                  </p>
                  <p class="c-box-bg -gray _mt-32">
                    WORK-LIFE
                    PLUSでは、より一層みなさまにより便利にご活用いただけるよう、2022年XX月XX日（木）に新サービス『XXXXXXXX』を導入いたします。新しいサービスをご利用いただくにあたり、WORK-LIFE
                    PLUSのユーザーサイトより、お手続きをお願いいたします。
                  </p>
                  <ImageMagnify
                    src="image/member/common/thumbnail_service_detail_04.jpg"
                    class="c-list-service-order__image-magnify"
                  />
                </div>
              </li>
            </ol>
          </div>
        </div>

        <NavFooter />
      </div>
    </div>

    <div class="c-sticky-bookmark">
      <div class="c-sticky-bookmark__favorite">
        <ButtonFavorite text="お気に入り登録" textActive="お気に入り登録済" />
      </div>
      <div class="c-sticky-bookmark__detail">
        <ButtonText text="利用する" />
      </div>
    </div>
  </LayoutMember>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperOptions = {
      slidesPerView: 1.2904,
      spaceBetween: 16,
      resistanceRatio: 0,
      breakpoints: {
        897: {
          slidesPerView: 3,
          spaceBetween: '3.84%',
        },
      },
    }

    return {
      swiperOptions,
    }
  },
}
</script>
