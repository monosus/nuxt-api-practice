<template>
  <LayoutMember :current="6">
    <HeaderBarSticky text="作業届" labelText="新規作成" labelStyle="red" spHide>
      <ButtonText text="作成を中止する" styles="outline-red" />
    </HeaderBarSticky>

    <div class="l-section-member">
      <div class="l-section-member__in _pt-35">
        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold>
          以下の内容で申請します。<br />よろしいでしょうか？
        </TextDefault>
        <dl class="c-form-confirm -member _mt-33">
          <div class="c-form-confirm__row">
            <dt class="c-form-confirm__title">申請日</dt>
            <dd class="c-form-confirm__data">2022/12/20</dd>
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
                    iconName="document_purple"
                    text="作業届.xlxs"
                    isTargetBlank
                  />
                </li>
                <li class="c-list-download__item">
                  <LinkItem
                    href="#"
                    iconName="document_purple"
                    text="参考資料.pptx"
                    isTargetBlank
                  />
                </li>
                <li class="c-list-download__item">
                  <LinkItem
                    href="#"
                    iconName="document_purple"
                    text="写真.jpg"
                    isTargetBlank
                  />
                </li>
              </ul>
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
            text="登録する"
            styles="purple"
            @click="isModalOpen = true"
          />
        </BottomBar>
      </div>
    </div>

    <ModalBillNumberApplicationComplete
      billNumber="A-1000002"
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutMember>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_新規追加（CSV）_ファイル選択' })
    const isModalOpen = ref(true)
    const selectedFile = ref(null)

    const handleFileSelected = (file) => {
      selectedFile.value = file
    }

    return {
      isModalOpen,
      selectedFile,
      handleFileSelected,
    }
  },
}
</script>
