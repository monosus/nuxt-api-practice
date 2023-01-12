<template>
  <LayoutDefault pageTitle="従業員新規追加（CSV）" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in _pt-3">
        <div class="c-text-info">
          <p class="c-text-info__text">
            CSV登録用のテンプレートは<LinkItem
              text="こちら"
              href="#"
              isFontSm
            />からダウンロードしてお使いください。
          </p>
        </div>
        <CsvUpload class="_mt-45" maxSize="0000" @select="handleFileSelected" />
        <div class="_ta-center _mt-15">
          <ButtonText
            text="ファイルをチェックする"
            :isDisabled="!selectedFile?.length > 0"
            @action="isModalOpen = true"
          />
        </div>
      </div>
    </div>

    <ModalEmployeeCsvSelect
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutDefault>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_新規追加（CSV）_ファイル選択' })

    const selectedFile = ref(null)
    const isModalOpen = ref(false)

    const handleFileSelected = (file) => {
      selectedFile.value = file
    }

    return {
      selectedFile,
      handleFileSelected,
      isModalOpen,
    }
  },
}
</script>
