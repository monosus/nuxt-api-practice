<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <TextDefault fontSize="20" isBold>在籍の確認がとれましたか？</TextDefault>
      <TextDefault lineHeight="1.625"
        >テキストテキストテキストテキストテキストテキストテキストテキストテキストが入ります。</TextDefault
      >
      <div class="c-list-button -wide -modal">
        <ButtonText
          text="キャンセル"
          styles="outline-black"
          @action="handleClose"
        />
        <ButtonText
          text="確認済みにする"
          styles="purple"
          @action="handleClose"
        />
      </div>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalEmployeeEnrollment',
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
