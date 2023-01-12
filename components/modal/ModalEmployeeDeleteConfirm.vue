<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>登録データを削除しますか？</TextDefault>
      <TextDefault lineHeight="1.625"
        >この操作は取り消せません。<br />本当に山田
        山太郎さんを削除しますか？</TextDefault
      >
      <div class="c-list-button -modal">
        <ButtonText
          text="キャンセル"
          styles="outline-black"
          @action="handleClose"
        />
        <ButtonText text="削除" styles="red" @action="handleClose" />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalEmployeeDeleteConfirm',
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
