<template>
  <component
    :is="tag"
    class="c-link-item"
    :class="[
      getColor,
      { '-no-underline': hasNoUnderline, '-font-sm': isFontSm },
    ]"
    :href="href"
    :target="isTargetBlank ? '_blank' : null"
  >
    <span
      class="c-link-item__inner"
      :class="[iconName && iconPosition, { '-icon': iconName && iconPosition }]"
    >
      <span v-if="iconName" class="c-link-item__icon">
        <img :src="loadImage()" alt="" />
      </span>
      <span class="c-link-item__text">{{ text }}</span>
    </span>
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'LinkItem',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    iconName: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: 'left',
    },
    text: {
      type: String,
      required: true,
    },
    hasNoUnderline: {
      type: Boolean,
      default: false,
    },
    isFontSm: {
      type: Boolean,
      default: false,
    },
    isTargetBlank: {
      type: Boolean,
    },
  },
  setup(props) {
    const loadImage = () => {
      return new URL(
        `/assets/image/common/ico_${props.iconName}.svg`,
        import.meta.url
      )
    }

    const iconPosition = computed(() => {
      let position = 'left'

      if (props.position === 'left') {
        position = 'left'
      } else if (props.position === 'right') {
        position = 'right'
      }

      return `-${position}`
    })

    const getColor = computed(() => {
      return props.color ? `-color-${props.color}` : null
    })

    return {
      props,
      loadImage,
      iconPosition,
      getColor,
    }
  },
}
</script>
