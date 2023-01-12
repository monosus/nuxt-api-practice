<template>
  <LayoutMember :current="6">
    <HeaderBarSticky text="作業届" labelText="新規作成" labelStyle="red" spHide>
      <ButtonText text="作成を中止する" styles="outline-red" />
    </HeaderBarSticky>

    <div class="l-section-member">
      <div class="l-section-member__in _pt-0">
        <section class="_mt-40 _mt-sm-16">
          <TitleBorder tag="h2">作業届の申請方法</TitleBorder>
          <TextDefault lineHeight="1.7" class="_mt-18"
            >以下の申請ファイルをダウンロードし、記入した上でアップロードしてください。<br />その他説明があればここに記載できるゾーンを設けてます。（説明文は固定）
          </TextDefault>
          <div class="_mt-8">
            <LinkItem
              href="#"
              iconName="download"
              text="申請書テンプレート一式.zip"
              isTargetBlank
            />
          </div>
        </section>

        <section class="_mt-105">
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
      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_新規追加（CSV）_ファイル選択' })

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
