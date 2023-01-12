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
      <div class="l-section-member__in _pt-35">
        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold>
          以下の内容で再申請します。<br />よろしいでしょうか？
        </TextDefault>
        <dl class="c-form-confirm -member -data-full _mt-33">
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">申請日</dt>
            <dd class="c-form-confirm__data">2022/12/20</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">申請名</dt>
            <dd class="c-form-confirm__data">作業届</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">親申請No.</dt>
            <dd class="c-form-confirm__data">A-1000001</dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">申請ファイル</dt>
            <dd class="c-form-confirm__data">
              <div class="c-form-confirm__box-border">
                <TextDefault fontSize="14" lineHeight="1.75" class="_mb-6">
                  削除するファイル
                </TextDefault>
                <ul class="c-list-download">
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="document_purple"
                      text="作業届.xlxs"
                      isTargetBlank
                    />
                  </li>
                </ul>
              </div>
              <div class="c-form-confirm__box-border">
                <TextDefault fontSize="14" lineHeight="1.75" class="_mb-6">
                  アップロードするファイル
                </TextDefault>
                <ul class="c-list-download">
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="document_purple"
                      text="作業届.xlxs"
                      isTargetBlank
                    />
                  </li>
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="document_purple"
                      text="補足資料.pptx"
                      isTargetBlank
                    />
                  </li>
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="document_purple"
                      text="〇〇〇〇作業図面.pptx"
                      isTargetBlank
                    />
                  </li>
                </ul>
              </div>
            </dd>
          </div>
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">申請コメント</dt>
            <dd class="c-form-confirm__data">
              コメントコメントコメントコメントが入ります。
            </dd>
          </div>
        </dl>
        <BottomBar isResponsive isStaticSp class="_mt-sm-64">
          <ButtonText text="入力画面へもどる" styles="outline-purple" />
          <ButtonText
            text="申請する"
            styles="purple"
            @click="isModalOpen = true"
          />
        </BottomBar>
      </div>
    </div>

    <ModalBuildingApplicationComplete
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutMember>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'ビル申請編集内容確認' })

    const selectedFile = ref(null)
    const isModalOpen = ref(true)

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
