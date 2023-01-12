<template>
  <LayoutDefault pageTitle="従業員新規追加" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in">
        <form method="post" action="#">
          <div class="c-form-default">
            <div class="c-form-default__row">
              <FormColumn>
                <FormGroup label="苗字（漢字）">
                  <InputText placeholder="山田" value="山田" />
                </FormGroup>
                <FormGroup label="名前（漢字）">
                  <InputText placeholder="太郎" value="山太郎" />
                </FormGroup>
              </FormColumn>
            </div>
            <div class="c-form-default__row">
              <FormColumn>
                <FormGroup label="苗字（カナ）">
                  <InputText placeholder="ヤマダ" value="ヤマダ" />
                </FormGroup>
                <FormGroup label="名前（カナ）">
                  <InputText placeholder="タロウ" value="ヤマタロウ" />
                </FormGroup>
              </FormColumn>
            </div>
            <div class="c-form-default__row">
              <FormColumn size="2b">
                <FormGroup label="メールアドレス">
                  <InputText
                    placeholder="taro.yamada@worklifeplus.co.jp"
                    value="yamataro.yamada@worklifeplus.co.jp"
                  />
                </FormGroup>
              </FormColumn>
            </div>
            <div class="c-form-default__row">
              <InputCheckbox text="管理者権限を付与する" isChecked />
            </div>
            <div class="c-form-default__row _mt-64">
              <FormGroup label="入居ビル" space="md">
                <div class="c-list-result">
                  <div
                    v-if="state.listBuilding.length > 0"
                    class="c-list-result__list"
                  >
                    <div
                      v-for="(item, index) in state.listBuilding"
                      :key="index"
                      class="c-list-result__item"
                    >
                      <ButtonResult
                        :text="item.text"
                        styles="purple"
                        @delete="handleDeleteResult(index)"
                      />
                    </div>
                  </div>
                  <ButtonText
                    type="button"
                    text="選択する"
                    styles="purple"
                    radius="radius-22"
                    size="sm"
                    @action="openSearchBuildingModal"
                  />
                </div>
              </FormGroup>
            </div>
          </div>
        </form>
      </div>
    </div>

    <BottomBar>
      <ButtonText text="登録確認画面へ" />
    </BottomBar>

    <ModalEmployeeSearchBuilding
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutDefault>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_新規追加（1件）_入力' })
    const isModalOpen = ref(false)
    const state = reactive({
      listBuilding: [{ text: 'PMO EX 日本橋茅場町' }],
    })

    const handleDeleteResult = (index) => {
      state.listBuilding.splice(index, 1)
    }

    const openSearchBuildingModal = () => {
      isModalOpen.value = true
    }

    return {
      isModalOpen,
      state,
      handleDeleteResult,
      openSearchBuildingModal,
    }
  },
}
</script>
