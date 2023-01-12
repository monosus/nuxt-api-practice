<template>
  <ModalDefault :isShow="isShow" class="_border-radius-4" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>申請が完了しました</TextDefault>
      <TextDefault>申請No. {{ billNumber }}として受け付けました。</TextDefault>
      <div class="c-list-button -wide -modal">
        <ButtonText
          text="詳細画面を確認"
          styles="outline-black"
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
  name: 'ModalBillNumberApplicationComplete',
  props: {
    isShow: Boolean,
    billNumber: {
      type: String,
      required: true,
    },
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

