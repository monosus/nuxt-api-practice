<template>
  <div
    ref="bottomBarRef"
    class="c-bottom-bar"
    :class="{
      '-responsive': isResponsive,
      '-static-sp': isStaticSp,
    }"
  >
    <div class="c-bottom-bar__in">
      <div class="c-bottom-bar__info">
        <p v-if="text" class="c-bottom-bar__text">{{ text }}</p>
      </div>
      <div class="c-bottom-bar__button">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'BottomBar',
  props: {
    text: {
      type: String,
      default: null,
    },
    isResponsive: {
      type: Boolean,
      default: null,
    },
    isStaticSp: {
      type: Boolean,
      default: null,
    },
  },
  setup(props) {
    const bottomBarRef = ref(null)

    const pageScroll = () => {
      bottomBarRef.value.style.left = `${window.scrollX * -1}px`
    }

    onMounted(() => {
      if (!props.isResponsive) {
        window.addEventListener('scroll', pageScroll)
        pageScroll()
      }
    })

    onUnmounted(() => {
      if (!props.isResponsive) {
        window.removeEventListener('scroll', pageScroll)
      }
    })

    return {
      props,
      bottomBarRef,
    }
  },
}
</script>
