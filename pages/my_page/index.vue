<template>
  <LayoutMember :current="7">
    <TitleGrid titleEn="My Pages" titleJp="マイページ">
      <ButtonText text="編集" styles="purple" />
    </TitleGrid>

    <div class="l-section-member">
      <div class="l-section-member__in">
        <div class="c-form-profile-confirm">
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">氏名</p>
            <p class="c-form-profile-confirm__data">河田 川之介</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">氏名（カナ）</p>
            <p class="c-form-profile-confirm__data">カワダ カワノスケ</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">入居ビル</p>
            <p class="c-form-profile-confirm__data">PMO EX 日本橋茅場町</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">
              ログインID（メールアドレス）
            </p>
            <p class="c-form-profile-confirm__data">
              kawanosuke.kawada@isid.co.jp
            </p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">パスワード</p>
            <p class="c-form-profile-confirm__data">
              <LinkItem
                href="#"
                text="パスワードを変更する"
                position="right"
                iconName="blank_purple"
                isTargetBlank
              />
            </p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">
              各種通知受信用メールアドレス
            </p>
            <p class="c-form-profile-confirm__data">k.kawada@gmail.com</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">連絡用電話番号</p>
            <p class="c-form-profile-confirm__data">09012349876</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">生年月日</p>
            <p class="c-form-profile-confirm__data">1980/12/31</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">性別</p>
            <p class="c-form-profile-confirm__data">男性</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">担当業務</p>
            <p class="c-form-profile-confirm__data">営業</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">職階</p>
            <p class="c-form-profile-confirm__data">未記入</p>
          </div>
          <div class="c-form-profile-confirm__row">
            <p class="c-form-profile-confirm__title">居住地</p>
            <p class="c-form-profile-confirm__data">未記入</p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">興味関心のある</p>
            <p class="c-form-profile-confirm__data">
              選択肢A選択肢A選択肢A選択肢A選択肢A
            </p>
          </div>
          <div class="c-form-profile-confirm__row -full">
            <p class="c-form-profile-confirm__title">メール通知受け取り設定</p>
            <p class="c-form-profile-confirm__data">メール通知を受け取る</p>
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
    useHead({ title: '' })
    return {}
  },
}
</script>
