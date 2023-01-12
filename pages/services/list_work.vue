<template>
  <LayoutMember :current="2">
    <TitleGrid titleEn="Service" titleJp="サービス" />
    <div class="l-section-member">
      <div class="l-section-member__in">
        <div class="c-tab-service">
          <a class="c-tab-service__link -active" href="/services/list_work">
            <p class="c-tab-service__text">WORK</p>
            <p class="c-tab-service__subtext">ビジネス向けサービス</p>
          </a>
          <a class="c-tab-service__link" href="/services/list_life">
            <p class="c-tab-service__text">LIFE</p>
            <p class="c-tab-service__subtext">ライフスタイル向けサービス</p>
          </a>
        </div>
        <div class="c-box-service">
          <TitleBorder tag="h2" class="_mb-24">
            ビジネス課題を相談する
          </TitleBorder>
          <BannerService
            src="image/member/common/hero_list_work.jpg"
            title="WORKコンシェルジュ"
            subtitle="Work Concierge"
            text="「働く」に関して何でもご相談ください"
            officeLogo="image/common/logo_persol.png"
            officeName="パーソルP&T"
            type="work"
          />
        </div>

        <div class="c-box-service">
          <TitleBorder tag="h2">さまざまな場所で働く</TitleBorder>
          <div class="c-list-service">
            <CardService
              href="#"
              src="image/member/common/img_list_work_01.jpg"
              title="シェアオフィス"
              text="集中も休憩も自分のペースで。自由なシェアオフィ…"
              balloon="利用無料"
              officeLogo="image/common/logo_h1t.png"
              officeName="H1T"
            />
            <CardService
              href="#"
              src="image/member/common/img_list_work_02.jpg"
              title="バーチャルオフィス"
              text="隣で話しているかのような、バーチャルな空間を。"
              balloon="利用無料"
              officeLogo="image/common/logo_ovice.png"
              officeName="oVice"
            />
          </div>
        </div>

        <div class="c-box-service">
          <TitleBorder tag="h2">専門家に相談する</TitleBorder>
          <div class="c-list-service">
            <CardService
              href="#"
              src="image/member/common/img_list_work_03.jpg"
              title="オフィスコンシェルジュ"
              text="オフィスリノベーションの頼れる専門家。"
              balloon="初回相談無料"
              officeLogo="image/common/logo_nomura.png"
              officeName="野村不動産パートナーズ"
            />
            <CardService
              href="#"
              src="image/member/common/img_list_work_04.jpg"
              title="企業不動産コンシェルジュ"
              text="会社保有の不動産について何でもご相談ください。"
              balloon="初回相談無料"
              officeLogo="image/common/logo_nomura.png"
              officeName="野村不動産ソリューションズ"
            />
          </div>
        </div>

        <div class="c-box-service">
          <TitleBorder tag="h2">会議室・備品予約</TitleBorder>
          <div class="c-list-service">
            <CardService
              href="#"
              src="image/member/common/img_list_work_05.jpg"
              title="ワークスペース・備品手配"
              text="オフィス内の空きスペースや、共有備品の予約。"
              balloon="利用無料"
              officeLogo="image/common/logo_wecrew.png"
              officeName="wecrew"
            />
          </div>
        </div>
      </div>

      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
export default {
  setup() {
    useHead({ title: '一覧_WORK' })
  },
}
</script>
