<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold
        >お知らせを非公開で保存しました</TextDefault
      >
      <TextDefault lineHeight="1.8"
        >お知らせを公開をする場合は、お知らせの詳細ページから再設定して保存をしてください。</TextDefault
      >
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
  name: 'ModalInformationRegisterPrivateComplete',
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
