
<template>
  <ModalDefault :isShow="isShow" class="_border-radius-4" @close="handleClose">
    <div class="modal-container">
      <TextDefault tag="h4" fontSize="20" isBold
        >申し込みが完了しました</TextDefault
      >
      <TextDefault>内容の確認はメールで</TextDefault>
      <div class="c-list-button -modal">
        <ButtonText text="ホームへ戻る" styles="purple" @action="handleClose" />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalServiceApplicationComplete',
  props: {
    isShow: Boolean,
  },
  emits: ['close'],
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
