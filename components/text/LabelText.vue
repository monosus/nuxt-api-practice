<template>
  <div class="c-label-text" :class="{ '-lg': isLarge }">{{ text }}</div>
</template>

<script>
export default {
  name: 'LabelText',
  props: {
    text: {
      type: String,
      required: true,
    },
    isLarge: {
      type: Boolean,
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>
