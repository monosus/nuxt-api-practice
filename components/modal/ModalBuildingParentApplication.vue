<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold
        >親申請の申請No.を入力してください</TextDefault
      >
      <FormGroup label="申請No.">
        <InputText v-model="serial" placeholder="A-1234567" />
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
          :isDisabled="isDisabled"
          @action="handleClose"
        />
      </div>
    </div>
  </ModalDefault>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'ModalBuildingParentApplication',
  props: {
    isShow: Boolean,
  },
  setup(props, { emit }) {
    const serial = ref('')
    const isDisabled = computed(() => !serial.value)
    const handleClose = () => {
      emit('close')
    }
    return {
      props,
      handleClose,
      serial,
      isDisabled,
    }
  },
}
</script>
