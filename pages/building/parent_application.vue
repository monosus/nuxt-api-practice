<template>
  <div>
    <LayoutDefault
      pageTitle="A-1000002 / 作業届"
      labelText="未対応"
      labelStyle="red"
      :current="2"
    >
      <template #headerButton>
        <ButtonText text="差し戻し画面へ" styles="outline-purple" />
        <ButtonText text="承認画面へ" styles="purple" />
      </template>

      <div class="l-section-default">
        <div class="l-section-default__in -pad-memo _pt-8">
          <LinkItem
            href="#"
            text="一覧画面へ戻る"
            iconName="arrow_prev_purple"
            hasNoUnderline
          />
          <TitleBorder class="_mt-40" tag="h2">申請概要</TitleBorder>
          <dl class="c-form-confirm _mt-15">
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">ステータス</dt>
              <dd class="c-form-confirm__data">未対応</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請日</dt>
              <dd class="c-form-confirm__data">2022/12/20</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請No.</dt>
              <dd class="c-form-confirm__data">A-1000002</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請名</dt>
              <dd class="c-form-confirm__data">作業届</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請ファイル</dt>
              <dd class="c-form-confirm__data">
                <ul class="c-list-download">
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="download"
                      text="作業届.xlxs"
                      isTargetBlank
                    />
                  </li>
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="download"
                      text="添付ファイル1.xlxs"
                      isTargetBlank
                    />
                  </li>
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="download"
                      text="添付ファイル2.xlxs"
                      isTargetBlank
                    />
                  </li>
                </ul>
              </dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">ビル</dt>
              <dd class="c-form-confirm__data">PMO EX 日本橋茅場町</dd>
            </div>
          </dl>
        </div>

        <div class="l-section-default__in -pad-memo">
          <div class="c-text-with-button">
            <TitleBorder tag="h2">関連申請</TitleBorder>
            <ButtonText
              class="_pl-16 _pr-16 _ml-16"
              text="親申請を設定する"
              size="sm"
              styles="outline-purple"
            />
          </div>
        </div>

        <div class="l-section-default__in -pad-memo">
          <TitleBorder tag="h2">申請者情報</TitleBorder>
          <dl class="c-form-confirm _mt-15">
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
              <dt class="c-form-confirm__title">企業名</dt>
              <dd class="c-form-confirm__data">株式会社テナントオフィス</dd>
            </div>
          </dl>
        </div>

        <div class="l-section-default__in -pad-memo">
          <TitleBorder tag="h2">コメント履歴</TitleBorder>
          <ListComment :comments="comments" />
        </div>

        <div class="l-section-default__in -pad-memo _pt-24">
          <ButtonText text="この申請を取り消す" styles="outline-red" />
        </div>
      </div>

      <BoxMemo />

      <ModalBuildingParentApplication
        :isShow="isModalOpen"
        @close="isModalOpen = false"
      />
    </LayoutDefault>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'ビル申請管理_ビル申請_詳細' })
    const isModalOpen = ref(true)
    const comments = [
      {
        text: '申請内容のご確認のほど宜しくお願い申し上げます。',
        date: '2022/12/20',
        author: '申請者：山田 山太郎',
      },
    ]

    return {
      isModalOpen,
      comments,
    }
  },
}
</script>
