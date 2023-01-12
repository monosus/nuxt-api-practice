<template>
  <LayoutDefault pageTitle="お知らせ詳細" :current="1">
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
        <TitleBorder class="_mt-35" tag="h2">基本設定</TitleBorder>
        <div class="c-form-info -border-top">
          <div class="c-form-info__row">
            <div class="c-form-info__title">お知らせのカテゴリ</div>
            <div class="c-form-info__data">一般</div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">公開日 / 公開区分</div>
            <div class="c-form-info__data">
              2022/12/31<span class="c-form-info__data-label">公開中</span>
            </div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">公開／通知メール送信範囲</div>
            <div class="c-form-info__data">全体</div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">サムネイル画像</div>
            <div class="c-form-info__data">
              <ListThumbnail
                :imgUploads="state.imgUploads"
                @delete="handleDeleteImage"
              />
            </div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">表示設定</div>
            <div class="c-form-info__data">
              このお知らせWL+のトップページに表示する
            </div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">お知らせの作成者</div>
            <div class="c-form-info__data">山田 山太郎</div>
          </div>
        </div>
      </div>
      <div class="l-section-default__in">
        <TitleBorder tag="h2">お知らせ</TitleBorder>
        <div class="c-form-info">
          <div class="c-form-info__row">
            <div class="c-form-info__title">タイトル</div>
            <div class="c-form-info__data -text-emphasize">
              新しくXXXXXXXのサービスが使えるようになりました
            </div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">本文</div>
            <div class="c-form-info__data">
              WORK-LIFE
              PLUSでは、より一層みなさまにより便利にご活用いただけるよう、<br />2022年XX月XX日（木）に新サービス『XXXXXXXX』を導入いたします。<br /><br />新しいサービスをご利用いただくにあたり、WORK-LIFE
              PLUSのユーザーサ<br />イトより、お手続きをお願いいたします。お客様のお手続きに必要な情報をお知ら<br />せいたします。<br /><br />━━━━━━━━━━━━━━━━━━━━━<br />詳しくはこちらのページにアクセスください<br />https://www.XXXXXXXX.co.jp/<br />━━━━━━━━━━━━━━━━━━━━━
            </div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">添付画像</div>
            <div class="c-form-info__data">
              <ListThumbnail
                :imgUploads="state.imgUploadList"
                @delete="handleDeleteImage"
              />
            </div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">添付ファイル</div>
            <div class="c-form-info__data">
              <BoxAttach
                :listFile="state.listFile"
                @delete="handleDeleteFile"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="l-section-default__in">
        <TitleBorder tag="h2">通知メール設定</TitleBorder>
        <div class="c-form-info">
          <div class="c-form-info__row">
            <div class="c-form-info__title">
              おしらせ通知メールの送信<span class="c-form-info__title-require"
                >※初回公開時のみ</span
              >
            </div>
            <div class="c-form-info__data">送信する</div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">通知メールの本文</div>
            <div class="c-form-info__data">
              WORK-LIFE PLUS ユーザーのみなさま<br />いつも WORK-LIFE
              PLUSをご利用いただき、誠にありがとうございます。<br /><br />WORK-LIFE
              PLUSでは、より一層みなさまにより便利にご活用いただけるよ<br />う、2022年XX月XX日（木）に新サービス『XXXXXXXX』を導入いたします。<br /><br />新しいサービスをご利用いただくにあたり、WORK-LIFE
              PLUSのユーザーサイ<br />トより、お手続きをお願いいたします。お客様のお手続きに必要な情報をお知ら<br />せいたします。<br /><br />━━━━━━━━━━━━━━━━━━━━━<br />詳しくはこちらのページにアクセスください<br />https://www.worklifrplus.XXXXXXXX.co.jp/AAAAAA<br />━━━━━━━━━━━━━━━━━━━━━<br /><br />送信元:WORK-LIFE
              PLUS運営事務局<br />==============================================(c）<br />2022
              XXXXXXXX Company.All Rights Reserved.<br />https://www.XXXXXXXX.co.jp/
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    useHead({ title: 'おしらせ管理_おしらせ_詳細' })
    const state = reactive({
      listFile: [
        {
          text: 'サービス概要資料.pdf',
          hasIcon: false,
        },
        {
          text: 'サービス申し込みテンプレート.xlsx',
          hasIcon: false,
        },
        {
          text: '参考画像.jpg',
          hasIcon: false,
        },
      ],
      imgUploads: [
        {
          src: new URL(`@/assets/image/common/thumbnail1.jpg`, import.meta.url),
          hasIcon: false,
        },
      ],
      imgUploadList: [
        {
          src: new URL(`@/assets/image/common/thumbnail2.jpg`, import.meta.url),
          hasIcon: false,
        },
        {
          src: new URL(`@/assets/image/common/thumbnail3.jpg`, import.meta.url),
          hasIcon: false,
        },
        {
          src: new URL(`@/assets/image/common/thumbnail4.jpg`, import.meta.url),
          hasIcon: false,
        },
      ],
    })

    const handleDeleteFile = (index) => {
      state.listFile.splice(index, 1)
    }

    const handleDeleteImage = (index) => {
      state.imgUploads.splice(index, 1)
    }

    return {
      state,
      handleDeleteFile,
      handleDeleteImage,
    }
  },
}
</script>
