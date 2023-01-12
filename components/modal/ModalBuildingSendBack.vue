<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>この申請を差し戻しますか？</TextDefault>
      <TextDefault>必要に応じてコメントができます。</TextDefault>
      <TextArea hasNoResize placeholder="コメントを記入"></TextArea>
      <div class="c-list-button -wide -modal _mt-0">
        <ButtonText
          text="キャンセル"
          styles="outline-black"
          @action="handleClose"
        />
        <ButtonText text="差し戻す" styles="purple" @action="handleClose" />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalBuildingSendBack',
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

