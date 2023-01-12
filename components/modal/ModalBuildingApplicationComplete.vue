<template>
  <ModalDefault :isShow="isShow" class="_border-radius-4" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>再申請が完了しました</TextDefault>
      <div class="c-list-button -wide -modal _mt-md-56">
        <ButtonText
          text="詳細画面を確認"
          styles="outline-purple"
          @action="handleClose"
        />
        <ButtonText
          text="ビル関連へ戻る"
          styles="purple"
          @action="handleClose"
        />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalBuildingApplicationComplete',
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
