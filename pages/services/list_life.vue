<template>
  <LayoutMember :current="3">
    <TitleGrid titleEn="Service" titleJp="サービス" />
    <div class="l-section-member">
      <div class="l-section-member__in">
        <div class="c-tab-service">
          <a class="c-tab-service__link" href="/services/list_work">
            <p class="c-tab-service__text">WORK</p>
            <p class="c-tab-service__subtext">ビジネス向けサービス</p>
          </a>
          <a class="c-tab-service__link -active" href="/services/list_life">
            <p class="c-tab-service__text">LIFE</p>
            <p class="c-tab-service__subtext">ライフスタイル向けサービス</p>
          </a>
        </div>
        <div class="c-box-service">
          <TitleBorder tag="h2" class="_mb-24">
            ライフスタイルについて相談する
          </TitleBorder>
          <BannerService
            src="image/member/common/hero_list_life.jpg"
            title="LIFEコンシェルジュ"
            subtitle="Life Concierge"
            text="「暮らし」に関して何でもご相談ください"
            officeLogo="image/common/logo_tpo.png"
            officeName="TPO"
            type="life"
          />
        </div>

        <div class="c-box-service">
          <TitleBorder tag="h2">おトクに利用する</TitleBorder>
          <div class="c-list-service">
            <CardService
              href="#"
              src="image/member/common/img_list_life_01.jpg"
              title="クーポン"
              text="野村不動産のオフィスを利用されている方におトク…"
              balloon="各種割引"
              officeLogo="image/common/logo_nomura.png"
              officeName="+WORKERS"
            />
          </div>
        </div>

        <div class="c-box-service">
          <TitleBorder tag="h2">フィットネス</TitleBorder>
          <div class="c-list-service">
            <CardService
              href="#"
              src="image/member/common/img_list_life_02.jpg"
              title="スポーツクラブ"
              text="美しく、強く、健やかに。"
              balloon="利用無料"
              officeLogo="image/common/logo_megalos.png"
              officeName="メガロス"
            />
          </div>
        </div>

        <div class="c-box-service">
          <TitleBorder tag="h2">専門家に相談する</TitleBorder>
          <div class="c-list-service">
            <CardService
              href="#"
              src="image/member/common/img_list_life_03.jpg"
              title="住まいコンシェルジュ（オンライン）"
              text="お住まい探しに関すること、何でもご相談ください。"
              balloon="初回相談無料"
              officeLogo="image/common/logo_proud.png"
              officeName="PROUD ONLINE SALON"
            />

            <CardService
              href="#"
              src="image/member/common/img_list_life_04.jpg"
              title="住まいコンシェルジュ（売買仲介）"
              text="保有の不動産売買について何でもご相談ください。"
              balloon="初回相談無料"
              officeLogo="image/common/logo_nomura.png"
              officeName="野村不動産"
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
    useHead({ title: '一覧_LIFE' })
  },
}
</script>
