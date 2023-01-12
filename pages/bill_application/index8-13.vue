<template>
  <LayoutMember :current="6">
    <HeaderBarSticky
      text="A-1000002 / 作業届"
      labelText="差し戻し"
      labelStyle="red"
      spHide
    >
      <ButtonText text="編集を中止する" styles="outline-red" />
    </HeaderBarSticky>

    <div class="l-section-member">
      <div class="l-section-member__in _pt-61 _pb-160">
        <TitleBorder class="_mb-16" tag="h2"
          >アップロード済みの申請ファイル</TitleBorder
        >
        <section class="c-form-application-edit _mt-15">
          <div class="c-form-application-edit__row">
            <div class="c-form-application-edit__title">作業届.xlsx</div>
            <div class="c-form-application-edit__action">
              <InputCheckbox text="削除する" />
            </div>
          </div>
          <div class="c-form-application-edit__row">
            <div class="c-form-application-edit__title">補足資料.pptx</div>
            <div class="c-form-application-edit__action">
              <InputCheckbox text="削除する" />
            </div>
          </div>
          <div class="c-form-application-edit__row">
            <div class="c-form-application-edit__title">
              〇〇〇〇作業図面.pptx
            </div>
            <div class="c-form-application-edit__action">
              <InputCheckbox text="削除する" />
            </div>
          </div>
        </section>

        <section class="_mt-72">
          <TitleBorder tag="h2">申請ファイルアップロード</TitleBorder>
          <FileUpload
            class="_mt-15"
            maxSize="0000"
            @select="handleFileSelected"
          />
        </section>

        <section class="_mt-90">
          <TitleBorder tag="h2">申請コメント（任意）</TitleBorder>
          <div class="_mt-24">
            <TextArea
              class="c-box-memo__form-textarea"
              placeholder="申請コメントを入力。最大0000文字まで入力できます。"
              size="lg"
              hasNoResize
            />
          </div>
        </section>
        <BottomBar>
          <ButtonText
            text="申請内容を確認する"
            :isDisabled="!selectedFile.length > 0"
          />
        </BottomBar>
      </div>
    </div>
  </LayoutMember>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'ビル申請_編集' })

    const selectedFile = ref([])

    const handleFileSelected = (file) => {
      selectedFile.value = file
    }

    return {
      selectedFile,
      handleFileSelected,
    }
  },
}
</script>

