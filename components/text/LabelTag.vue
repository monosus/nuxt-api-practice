<template>
  <div class="c-label-tag" :class="[buttonStyle, { '-wide': isWide, '-radius-sm': isRadiusSm }]">{{ text }}</div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'LabelTag',
  props: {
    text: {
      type: String,
      required: true,
    },
    styles: {
      type: String,
      default: 'gray',
    },
    isWide: {
      type: Boolean,
    },
    isRadiusSm: {
      type: Boolean,
    },
  },
  setup(props) {
    const buttonStyle = computed(() => {
      let styles = 'gray'

      if (props.styles === 'gray') {
        styles = 'gray'
      } else if (props.styles === 'purple') {
        styles = 'purple'
      } else if (props.styles === 'red') {
        styles = 'red'
      } else if (props.styles === 'black') {
        styles = 'black'
      } else if (props.styles === 'gradient-blue') {
        styles = 'gradient-blue'
      } else if (props.styles === 'gradient-orange') {
        styles = 'gradient-orange'
      }

      return `-${styles}`
    })

    return {
      props,
      buttonStyle,
    }
  },
}
</script>
