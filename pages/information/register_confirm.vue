<template>
  <LayoutDefault pageTitle="登録内容確認画面" :current="1">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in">
        <TextDefault tag="h2" fontSize="20" lineHeight="2" isBold>
          以下の内容でよろしければ、『保存する』ボタンを押してください。
        </TextDefault>
        <div class="c-box-info">
          <div class="c-box-info__in">
            <p class="c-box-info__title">
              公開区分：<span class="c-box-info__category">公開</span>
            </p>
            <p class="c-box-info__text">
              現在の設定は<span class="c-box-info__bold">公開</span
              >のため、『保存する』のボタンを押すと、このお知らせはすぐに公開されます。下書き保存をしたい場合は、公開区分を『<span
                class="c-box-info__bold"
                >非公開</span
              >』に変更した後に『保存する』のボタンを押してください。
            </p>
          </div>
        </div>
        <TitleBorder tag="h2">基本設定</TitleBorder>
        <div class="c-form-info -border-top">
          <div class="c-form-info__row">
            <div class="c-form-info__title">お知らせのカテゴリ</div>
            <div class="c-form-info__data">一般</div>
          </div>
          <div class="c-form-info__row">
            <div class="c-form-info__title">公開区分</div>
            <div class="c-form-info__data">公開</div>
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
            <div class="c-form-info__title">トップページへの表示</div>
            <div class="c-form-info__data">
              このお知らせをトップページに表示する
            </div>
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
    <BottomBar>
      <ButtonText text="編集画面へ戻る" styles="outline-purple" />
      <ButtonText text="保存する" />
    </BottomBar>
  </LayoutDefault>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    useHead({ title: 'おしらせ管理_新規作成_登録内容確認' })
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
