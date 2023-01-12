<template>
  <div class="c-title-grid">
    <div class="c-title-grid__in">
      <h1 class="c-title-grid__heading">
        <span class="c-title-grid__heading-en">{{ titleEn }}</span>
        <span class="c-title-grid__heading-jp">{{ titleJp }}</span>
      </h1>
      <div class="c-title-grid__button">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleGrid',
  props: {
    titleEn: {
      type: String,
      default: null,
    },
    titleJp: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
