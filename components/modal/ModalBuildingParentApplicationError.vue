<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>
        親申請の申請No.を入力してください
      </TextDefault>
      <FormGroup label="申請No." errorText="エラー文言が入ります">
        <InputText v-model="appNumber" placeholder="A-1234567" hasError />
      </FormGroup>
      <div class="c-list-button -wide -modal _mt-0">
        <ButtonText
          text="キャンセル"
          styles="outline-black"
          @action="handleClose"
        />
        <ButtonText
          text="登録する"
          styles="purple"
          :isDisabled="!appNumber"
          @action="handleClose"
        />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'ModalBuildingParentApplicationError',
  props: {
    isShow: Boolean,
  },
  setup(props, { emit }) {
    const appNumber = ref('')

    const handleClose = () => {
      emit('close')
    }
    return {
      props,
      appNumber,
      handleClose,
    }
  },
}
</script>
