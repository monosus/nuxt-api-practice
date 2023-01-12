<template>
  <Transition name="modal">
    <div
      v-if="isShow"
      class="c-modal-default"
      @click="handleModalBackdropClose"
    >
      <div ref="modalRef" class="c-modal-default__wrapper">
        <div ref="modalInnerRef" class="c-modal-default__inner">
          <div class="c-modal-default__container">
            <slot>modal body</slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'ModalDefault',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const modalRef = ref(null)
    const modalInnerRef = ref(null)

    const handleModalBackdropClose = (e) => {
      if (e.target.className === modalRef.value?.className || modalInnerRef.value?.className) {
        emit('close')
      }
    }

    onMounted(() => {
      if (props.isShow) {
        document.body.classList.add('body-fixed')
      }
    })

    return {
      props,
      modalRef,
      modalInnerRef,
      handleModalBackdropClose,
    }
  },
  watch: {
    isShow() {
      document.body.classList.toggle('body-fixed')
    },
  },
}
</script>
