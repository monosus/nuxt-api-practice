<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>登録データを更新しました</TextDefault>
      <div class="c-list-button -modal -single">
        <ButtonText
          text="詳細画面へ戻る"
          styles="purple"
          @action="handleClose"
        />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalEmployeeEditComplete',
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
