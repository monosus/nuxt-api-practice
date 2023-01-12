<template>
  <component :is="tag" class="c-title-sub">
    <span class="c-title-sub__title">{{ title }}</span>
    <span v-if="subtitle" class="c-title-sub__subtitle">{{ subtitle }}</span>
  </component>
</template>

<script>
export default {
  name: 'TitleSub',
  props: {
    tag: {
      type: String,
      default: 'h2',
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
}
</script>
