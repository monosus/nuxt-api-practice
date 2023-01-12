<template>
  <div class="c-title-eng-link">
    <h2 class="c-title-eng-link_title">
      <span class="c-title-eng-link__title-en">{{ titleEn }}</span>
      <span class="c-title-eng-link__title-jp">{{ titleJp }}</span>
    </h2>
    <LinkItem
      v-if="linkText"
      class="_d-sm-none"
      :href="link"
      :text="linkText"
      hasNoUnderline
      position="right"
      iconName="arrow_right_purple_small"
    />
  </div>
</template>

<script>
export default {
  name: 'TitleEngLink',
  props: {
    titleEn: {
      type: String,
      default: null,
    },
    titleJp: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: '#',
    },
    linkText: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
