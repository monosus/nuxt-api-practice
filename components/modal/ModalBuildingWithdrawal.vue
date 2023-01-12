<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>この申請を取り消しますか？</TextDefault>
      <TextDefault>必要に応じてコメントができます。</TextDefault>
      <TextArea hasNoResize placeholder="コメントを記入"></TextArea>
      <div class="c-list-button -wide -modal _mt-0">
        <ButtonText
          text="キャンセル"
          styles="outline-black"
          @action="handleClose"
        />
        <ButtonText text="取り消す" styles="red" @action="handleClose" />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalBuildingWithdrawal',
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

