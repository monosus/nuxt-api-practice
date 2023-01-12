<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault tag="h4" fontSize="20" isBold
        >新規登録が完了しました</TextDefault
      >
      <TextDefault>山田 山太郎さんの登録が完了しました。</TextDefault>
      <div class="c-list-button -modal">
        <ButtonText
          text="詳細画面を確認"
          styles="outline-black"
          @action="handleClose"
        />
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
  name: 'ModalEmployeeRegisterComplete',
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
