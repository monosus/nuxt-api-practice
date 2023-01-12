<template>
  <div class="c-img-magnify" @click="isModalOpen = true">
    <figure class="c-img-magnify__image">
      <img
        :src="getImage(src)"
        alt=""
        decoding="async"
      />
    </figure>
    <span class="c-img-magnify__icon"></span>
    <Teleport to="body">
      <ModalImageMagnify
        :isShow="isModalOpen"
        :src="getImage(src)"
        @close="isModalOpen = false"
      />
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ImageMagnify',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isModalOpen = ref(false)
    const getImage = (src) => {
      return new URL(`/assets/${src}`, import.meta.url)
    }
    return {
      props,
      getImage,
      isModalOpen,
    }
  },
}
</script>
