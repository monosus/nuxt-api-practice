<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>データ登録を開始しました</TextDefault>
      <TextDefault lineHeight="1.625"
        >データ登録が完了した際に、登録メールアドレス宛にお知らせメールをお送りします。</TextDefault
      >
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
  name: 'ModalEmployeeCsvComplete',
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
