<template>
  <LayoutDefault pageTitle="山田 山太郎" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="削除" styles="outline-red" />
      <ButtonText href="#" text="編集" styles="purple" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in _pt-8">
        <LinkItem
          href="#"
          text="一覧画面へ戻る"
          iconName="arrow_prev_purple"
          hasNoUnderline
        />
        <TitleBorder class="_mt-35" tag="h2">従業員情報</TitleBorder>
        <dl class="c-form-confirm _mt-10">
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
            <dt class="c-form-confirm__title">ステータス</dt>
            <dd class="c-form-confirm__data">本登録</dd>
          </div>
          <div class="c-form-confirm__row -align-center">
            <dt class="c-form-confirm__title">在籍確認</dt>
            <dd class="c-form-confirm__data">
              <ButtonText
                text="在籍確認済みにする"
                radius="radius-22"
                styles="purple"
                fontSize="fs-sm"
                size="xs"
              />
            </dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">権限</dt>
            <dd class="c-form-confirm__data">管理者</dd>
          </div>
        </dl>
      </div>

      <div class="l-section-default__in">
        <TitleBorder tag="h2">企業情報</TitleBorder>
        <dl class="c-form-confirm _mt-10">
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">企業名</dt>
            <dd class="c-form-confirm__data">株式会社電通国際情報サービス</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">郵便番号</dt>
            <dd class="c-form-confirm__data">111-2345</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">住所</dt>
            <dd class="c-form-confirm__data">東京都港区港南2-17-1</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">法人個人区分</dt>
            <dd class="c-form-confirm__data">法人</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">顧客業種区分</dt>
            <dd class="c-form-confirm__data">ソフト開発</dd>
          </div>
        </dl>
      </div>

      <div class="l-section-default__in">
        <TitleBorder tag="h2">入居ビル情報</TitleBorder>
        <dl class="c-form-confirm _mt-10">
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">物件名</dt>
            <dd class="c-form-confirm__data">PMO EX 日本橋茅場町</dd>
          </div>
        </dl>
      </div>
    </div>

    <ModalEmployeeDeleteConfirm
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutDefault>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_人データ_削除確認' })
    const isModalOpen = ref(true)
    return {
      isModalOpen,
    }
  },
}
</script>
