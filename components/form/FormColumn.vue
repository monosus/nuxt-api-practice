<template>
  <div class="c-form-column" :class="[colWidth]">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'FormColumn',
  props: {
    size: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const colWidth = computed(() => {
      switch(props.size) {
        case '2b':
          return `-width-${props.size}`
        case '3b':
          return `-width-${props.size}`
        default:
          return null
      }
    })
    return {
      props,
      colWidth,
    }
  },
}
</script>
