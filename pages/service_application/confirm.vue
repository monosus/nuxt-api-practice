<template>
  <LayoutMember :current="2" spHide>
    <HeaderBarSticky link="#" text="申込内容確認画面">
      <ButtonText
        class="_d-sm-none"
        text="申込を中止する"
        styles="outline-red"
        size="lg"
      />
      <ButtonText
        class="_d-md-none"
        text="中止"
        styles="outline-red"
        size="sm"
      />
    </HeaderBarSticky>

    <div class="l-section-member">
      <div class="l-section-member__in _pb-150">
        <div class="c-form-profile-confirm -complete">
          <TextDefault
            fontSize="20"
            isBold
            lineHeight="calc(32/20)"
            class="_mb-16 _d-sm-none"
            >以下内容でオフィスコンシェルジュを申し込みをします。<br />よろしいでしょうか？</TextDefault
          >
          <TextDefault
            fontSize="16"
            isBold
            lineHeight="calc(26/16)"
            class="_mb-sm-24 _d-md-none"
            >以下内容でオフィスコンシェルジュを申し込みをします。よろしいでしょうか？</TextDefault
          >
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">氏名</p>
            <p class="c-form-profile-confirm__data">河田 川之介</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">氏名（カナ）</p>
            <p class="c-form-profile-confirm__data">カワダ カワノスケ</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">企業名</p>
            <p class="c-form-profile-confirm__data">株式会社テナントオフィス</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">部署名</p>
            <p class="c-form-profile-confirm__data -color-gray">未入力</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">住所</p>
            <p class="c-form-profile-confirm__data">東京都港区港南2-17-1</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">入居ビル</p>
            <p class="c-form-profile-confirm__data">PMO EX 日本橋茅場町</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">メールアドレス</p>
            <p class="c-form-profile-confirm__data">
              kawanosuke.kawada@isid.co.jp
            </p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">電話番号</p>
            <p class="c-form-profile-confirm__data">09011112222</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">FAX番号</p>
            <p class="c-form-profile-confirm__data -color-gray">未入力</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">お問い合わせ内容</p>
            <p class="c-form-profile-confirm__data">
              今後大幅な増員が見込まれるため、オフィスレイアウトなどの相談をしたいと思っております。別ビルへの引っ越しも視野に入れつつ、お話を聞いてくださいますと幸いです。
            </p>
          </div>
          <BottomBar isResponsive isStaticSp class="_mt-64 -reverse">
            <ButtonText text="入力画面へもどる" styles="outline-purple" />
            <ButtonText text="申し込む" />
          </BottomBar>
        </div>
      </div>
    </div>
  </LayoutMember>
</template>

<script>
export default {
  setup() {
    useHead({ title: '' })
    return {}
  },
}
</script>
