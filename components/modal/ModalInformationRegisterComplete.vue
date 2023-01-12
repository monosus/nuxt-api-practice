<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>お知らせを公開しました</TextDefault>
      <div class="c-list-button -modal">
        <ButtonText
          text="一覧画面へ戻る"
          styles="purple"
          @action="handleClose"
        />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalInformationRegisterComplete',
  props: {
    isShow: Boolean,
  },
  setup(props, { emit }) {
    const handleClose = () => {
      emit('close')
    }
    return {
      props,
      handleClose,
    }
  },
}
</script>
