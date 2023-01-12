<template>
  <LayoutDefault pageTitle="更新内容確認画面" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in">
        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold>
          以下の内容で更新します。<br />よろしいでしょうか？
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
            <dt class="c-form-confirm__title">在籍確認</dt>
            <dd class="c-form-confirm__data">確認済</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">権限</dt>
            <dd class="c-form-confirm__data">管理者</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">企業</dt>
            <dd class="c-form-confirm__data">株式会社電通国際情報サービス</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">入居ビル</dt>
            <dd class="c-form-confirm__data">PMO EX 日本橋茅場町</dd>
          </div>
        </dl>
      </div>
    </div>

    <BottomBar>
      <ButtonText text="編集画面へもどる" styles="outline-purple" />
      <ButtonText text="更新する" styles="purple" />
    </BottomBar>

    <ModalEmployeeEditComplete
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutDefault>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    useHead({ title: 'テナント従業員管理_人データ_編集内容確認' })
    const isModalOpen = ref(true)
    return { isModalOpen }
  },
}
</script>
