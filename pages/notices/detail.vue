<template>
  <LayoutMember :current="5">
    <div class="c-title-bar">
      <div class="l-section-member">
        <div class="l-section-member__in _pt-sm-0">
          <div class="c-box-notices-detail">
            <figure class="c-hero-detail">
              <img
                src="@/assets/image/member/common/hero_notices_detail.jpg"
                alt="年末年始の営業時間について【H<sup>¹</sup>T&amp;提携店含む全店舗】"
                decoding="async"
              />
            </figure>
            <div class="c-box-heading-detail">
              <h2 class="c-box-heading-detail__heading">
                年末年始の営業時間について【H<sup>¹</sup>T&amp;提携店含む全店舗】
              </h2>
              <div class="c-box-heading-detail__under">
                <div class="c-box-heading-detail__tag">
                  <div class="c-box-heading-detail__item">
                    <LabelTag text="重要" styles="red" isRadiusSm />
                  </div>
                  <div class="c-box-heading-detail__item">
                    <LabelTag text="ビル" styles="black" isRadiusSm />
                  </div>
                </div>
              </div>
              <span class="c-box-heading-detail__date">2022.12.31</span>
            </div>
          </div>
          <div class="c-box-text-detail">
            <TextDefault tag="div" fontSize="16" lineHeight="1.625">
              2021年〜2022年の年末年始の営業時間についてお知らせいたします。<br /><br />
              【営業事務局の年末年始の営業時間につきまして】<br />
              契約・見学のお問い合わせ窓口については、12月29日〜1月5日が休業日となります。<br /><br />
              ■H<sup>¹</sup>T各店の営業時間について■<br /><br />
              【H<sup>¹</sup>T】<br />
              12月31日〜1月3日が休業日となります。<br />
              下記店舗のみ休業期間が異なりますのでご注意ください。<br /><br />
              ■H<sup>¹</sup>T神保町、H<sup>¹</sup>T恵比寿、H<sup>¹</sup>T飯田橋、H<sup>¹</sup>T名古屋エスカ、H<sup>¹</sup>T仙台<br />
              12月30日～1月3日が休業日となります。<br /><br />
              ■H<sup>¹</sup>T市ヶ谷、H<sup>¹</sup>T巣鴨<br />
              12月29日～1月3日が休業日となります。<br />
              <LinkItem
                href="#"
                text="https://www.XXXXXXXX.co.jp/"
                isTargetBlank
              />
              <br /><br />
              ■H<sup>¹</sup>T神田<br />
              12月26日～1月3日が休業日となります。<br />
              <LinkItem
                href="#"
                text="https://www.XXXXXXXX.co.jp/"
                isTargetBlank
              />
              <br /><br />
              ■軽井沢プリンスホテル コワーキングルーム by H<sup>¹</sup>T<br />
              休業日なし<br /><br />
              ■billage KOBE江戸町104ビル<br />
              12月29日～1月4日が休業日となります。<br />
              2021年は多くの方々にご利用いただき、誠にありがとうございました。<br />
              2022年もよりたくさんの方々に、快適な時間を提供できるよう努めていきます。<br />
              どうぞ引き続き、よろしくお願いします。<br /><br />
              ━━━━━━━━━━━━━━━━━━━━━<br />
              詳しくはこちらのページにアクセスください<br />
              <LinkItem
                href="#"
                text="https://www.XXXXXXXX.co.jp/"
                isTargetBlank
              />
              <br />
              ━━━━━━━━━━━━━━━━━━━━━
            </TextDefault>
          </div>

          <div class="c-list-image-zoom">
            <div class="c-list-image-zoom__in">
              <Swiper v-bind="swiperOptions">
                <SwiperSlide>
                  <ImageMagnify
                    src="image/member/common/img_notices_detail_xl_01.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ImageMagnify
                    src="image/member/common/img_notices_detail_02.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ImageMagnify
                    src="image/member/common/img_notices_detail_03.jpg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <ul class="c-list-download _mt-64">
            <li class="c-list-download__item">
              <LinkItem
                href="#"
                iconName="download"
                text="添付ファイル添付ファイル.pdf"
                isTargetBlank
              />
            </li>
            <li class="c-list-download__item">
              <LinkItem
                href="#"
                iconName="download"
                text="添付ファイル添付ファイル.pdf"
                isTargetBlank
              />
            </li>
            <li class="c-list-download__item">
              <LinkItem
                href="#"
                iconName="download"
                text="添付ファイル添付ファイル.pdf"
                isTargetBlank
              />
            </li>
          </ul>

          <div class="c-list-button c-list-button-notices">
            <ButtonText text="一覧ページに戻る" styles="outline-purple" />
          </div>
        </div>

        <NavFooter />
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
