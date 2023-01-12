<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="c-button-text"
    :class="[buttonStyle, buttonSize, buttonFontSize, buttonRadius]"
    :target="isTargetBlank && href ? '_blank' : null"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :tabindex="isDisabled ? -1 : 0"
    :type="type"
    :style="width && `--button-width: ${width}`"
    @click="onClickButton"
    >{{ text }}</component
  >
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ButtonText',
  props: {
    href: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    styles: {
      type: String,
      default: 'purple',
    },
    size: {
      type: String,
      default: null,
    },
    fontSize: {
      type: String,
      default: null,
    },
    radius: {
      type: String,
      default: null,
    },
    isTargetBlank: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    type: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const buttonStyle = computed(() => {
      let styles = 'purple'

      if (props.styles === 'purple') {
        styles = 'purple'
      } else if (props.styles === 'outline-purple') {
        styles = 'outline-purple'
      } else if (props.styles === 'red') {
        styles = 'red'
      } else if (props.styles === 'outline-red') {
        styles = 'outline-red'
      } else if (props.styles === 'black') {
        styles = 'black'
      } else if (props.styles === 'outline-black') {
        styles = 'outline-black'
      }

      return `-${styles}`
    })

    const buttonSize = computed(() => {
      let size = ''

      if (props.size === 'xs') {
        size = 'xs'
      } else if (props.size === 'sm') {
        size = 'sm'
      } else if (props.size === 'lg') {
        size = 'lg'
      }

      return size ? `-${size}` : ''
    })

    const buttonFontSize = computed(() => {
      let fontSize = ''

      if (props.fontSize === 'fs-sm') {
        fontSize = 'fs-sm'
      }

      return fontSize ? `-${fontSize}` : ''
    })

    const buttonRadius = computed(() => {
      let radius = ''

      if (props.radius === 'radius-22') {
        radius = 'radius-22'
      }

      return radius ? `-${radius}` : ''
    })

    const onClickButton = () => {
      emit('action')
    }

    return {
      props,
      buttonStyle,
      buttonSize,
      buttonFontSize,
      buttonRadius,
      onClickButton,
    }
  },
}
</script>
