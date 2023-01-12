<template>
  <LayoutDefault pageTitle="登録内容確認画面" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in">
        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold>
          以下の内容を登録します。<br />よろしいでしょうか？
        </TextDefault>
        <dl class="c-form-confirm _mt-20">
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">氏名</dt>
            <dd class="c-form-confirm__data">山田 山太郎</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">氏名（カナ）</dt>
            <dd class="c-form-confirm__data">ヤマダ ヤマタロウ</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">メールアドレス</dt>
            <dd class="c-form-confirm__data">
              yamataro.yamada@worklifeplus.co.jp
            </dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">権限</dt>
            <dd class="c-form-confirm__data">管理者</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">入居ビル</dt>
            <dd class="c-form-confirm__data">PMO EX 日本橋茅場町</dd>
          </div>
        </dl>
      </div>
    </div>

    <BottomBar>
      <ButtonText text="入力画面へもどる" styles="outline-purple" />
      <ButtonText text="登録する" styles="purple" />
    </BottomBar>
  </LayoutDefault>
</template>

<script>
export default {
  setup() {
    useHead({ title: 'テナント従業員管理_新規追加（1件）_登録内容確認' })
  },
}
</script>
