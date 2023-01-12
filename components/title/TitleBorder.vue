<template>
  <component :is="tag" class="c-title-border">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'TitleBorder',
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
  },
  setup(props) {
    return {
      props,
    };
  },
}
</script>
