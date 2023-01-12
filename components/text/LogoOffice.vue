<template>
  <div class="c-logo-office" :class="[textColor,logoSize]">
    <figure class="c-logo-office__logo">
      <img :src="getImage(src)" :alt="name" decoding="async"  />
    </figure>
    <p class="c-logo-office__name">{{ name }}</p>
  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  name: 'LogoOffice',
  props: {
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const getImage = (src) => {
      return new URL(`/assets/${src}`, import.meta.url)
    }
    const textColor = computed(() => props.color && `-${props.color}`)
    const logoSize = computed(() => props.size && `-size-${props.size}`)

    return {
      props,
      getImage,
      textColor,
      logoSize
    }
  },
}
</script>
