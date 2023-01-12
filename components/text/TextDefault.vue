<template>
  <component
    :is="tag"
    class="c-text-default"
    :class="[getTextAlign, getColor, { '-fw-bold': isBold }]"
    :style="{
      '--text-font-size': getRemFontSize,
      '--text-line-height': lineHeight,
    }"
  >
    <slot></slot>
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TextDefault',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    fontSize: {
      type: String,
      default: '16',
    },
    lineHeight: {
      type: String,
      default: '1',
    },
    isBold: {
      type: Boolean,
      default: null,
    },
    align: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const getRemFontSize = computed(() => {
      return `${Number(props.fontSize) / 10}rem`
    })

    const getTextAlign = computed(() => {
      return props.align ? `-align-${props.align}` : null
    })

    const getColor = computed(() => {
      return props.color ? `-color-${props.color}` : null
    })

    return { props, getRemFontSize, getTextAlign, getColor }
  },
}
</script>
