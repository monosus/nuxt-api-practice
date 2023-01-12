<template>
  <Transition name="modal-image">
    <div v-if="isShow" class="c-modal-image" @click="handleModalBackdropClose">
      <span class="c-modal-image__close" @click="$emit('close')">閉じる</span>
      <div ref="modalRef" class="c-modal-image__wrapper">
        <div class="c-modal-image__container">
          <figure class="c-modal-image__image">
            <img :src="src" alt="" decoding="async" />
          </figure>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'ModalImageMagnify',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    src: {
      type: Object,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const modalRef = ref(null)

    const handleModalBackdropClose = (e) => {
      if (e.target.className === modalRef.value?.className) {
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
