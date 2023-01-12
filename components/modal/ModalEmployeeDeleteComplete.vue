<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>データを削除しました</TextDefault>
      <div class="c-list-button -modal -single">
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
  name: 'ModalEmployeeDeleteComplete',
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
