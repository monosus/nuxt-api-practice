<template>
  <div class="c-title-sub-line">
    <component :is="tag" class="c-title-sub-line__title">{{ title }}</component>
    <p class="c-title-sub-line__sub">{{ sub }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    title: {
      type: String,
      default: null,
    },
    sub: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
