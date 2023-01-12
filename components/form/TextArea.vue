<template>
  <textarea
    class="c-text-area"
    :class="[textAreaSize, { '-resize': hasNoResize, '-error': hasError }]"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :disabled="isDisabled"
  ></textarea>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TextArea',
  props: {
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    isDisabled: {
      type: Boolean,
    },
    hasNoResize: {
      type: Boolean,
    },
    hasError: {
      type: Boolean,
    },
  },
  setup(props) {
    const textAreaSize = computed(() => {
      let size = ''

      if (props.size === 'sm') {
        size = 'sm'
      } else if (props.size === 'lg') {
        size = 'lg'
      }

      return size ? `-${size}` : ''
    })

    return {
      props,
      textAreaSize,
    }
  },
}
</script>
