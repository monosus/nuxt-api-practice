<template>
  <div class="c-button-result" :class="[buttonStyle]">
    <span class="c-button-result__text">{{ text }}</span>
    <i class="c-button-result__icon" @click="handleDelete"></i>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ButtonResult',
  props: {
    text: {
      type: String,
      required: true,
    },
    styles: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const buttonStyle = computed(() => {
      let styles = ''

      if (props.styles === 'purple') {
        styles = 'purple'
      } else if (props.styles === 'gray') {
        styles = 'gray'
      }

      return styles ? `-${styles}` : ''
    })

    const handleDelete = () => {
      emit('delete')
    }

    return {
      props,
      buttonStyle,
      handleDelete,
    }
  },
}
</script>
