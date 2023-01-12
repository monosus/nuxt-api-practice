<template>
  <a
    class="c-button-icon"
    :class="[buttonStyle, { '-icon': iconName }]"
    :href="href"
    :target="isTargetBlank ? '_blank' : null"
  >
    <span v-if="iconName" class="c-button-icon__icon">
      <img :src="loadImage()" width="24" height="24" alt="" />
    </span>
    <span class="c-button-icon__text">{{ text }}</span>
  </a>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ButtonIcon',
  props: {
    href: {
      type: String,
      default: null,
    },
    styles: {
      type: String,
      default: 'purple',
    },
    iconName: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    isTargetBlank: {
      type: Boolean,
    },
  },
  setup(props) {
    const buttonStyle = computed(() => {
      let styles = 'purple'

      if (props.styles === 'purple') {
        styles = 'purple'
      } else if (props.styles === 'outline-purple') {
        styles = 'outline-purple'
      }

      return `-${styles}`
    })

    const loadImage = () => {
      return new URL(
        `/assets/image/common/ico_${props.iconName}.svg`,
        import.meta.url
      )
    }

    return {
      props,
      buttonStyle,
      loadImage,
    }
  },
}
</script>
