<template>
  <LayoutDefault pageTitle="従業員新規追加（CSV）" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in">
        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold>
          以下の内容を登録します。<br />よろしいでしょうか？
        </TextDefault>
        <BoxShowCsv file="users_202211011201.csv" />
        <TextDefault tag="p" lineHeight="1.625"
          >CSVファイルに格納された2,000件のデータのうち、1,990件を登録、4件を更新します。</TextDefault
        >
        <TextDefault tag="p" lineHeight="1.625" color="red"
          >6件は以下の理由のため除外しました。</TextDefault
        >
        <TableShowCsv :csvData="state.csvData" />
        <TextDefault tag="p" class="_mt-32"
          >よろしければ『登録する』ボタンを押してください。</TextDefault
        >
      </div>
    </div>

    <BottomBar>
      <ButtonText text="CSVファイルを選択し直す" styles="outline-purple" />
      <ButtonText
        text="登録する"
        styles="purple"
        @action="isModalOpen = true"
      />
    </BottomBar>

    <ModalEmployeeCsvComplete
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutDefault>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_新規追加（1件）_登録内容確認' })
    const isModalOpen = ref(false)

    const state = reactive({
      csvData: [
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
        {
          number: '20000',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          reason: '必須項目である「項目A」が入力されていません',
        },
      ],
    })

    return {
      isModalOpen,
      state,
    }
  },
}
</script>
