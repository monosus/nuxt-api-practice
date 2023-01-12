<template>
  <ModalDefault :isShow="isShow" @close="handleClose">
    <div class="modal-container">
      <div class="c-loader">
        <svg width="112" height="112">
          <circle cx="56" cy="56" r="24" fill="none" stroke-width="8" style="stroke-dasharray: 1, 400;stroke-dashoffset: 0;stroke-linecap: round;stroke: #6437cb;"></circle>
        </svg>
      </div>
      <TextDefault fontSize="20" isBold>ファイルをチェック中です</TextDefault>
      <TextDefault lineHeight="1.625">データ数によっては、少しお時間がかかる可能性がございます。</TextDefault>
    </div>
  </ModalDefault>
</template>
<script>
export default {
  name: 'ModalEmployeeCsvSelect',
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
