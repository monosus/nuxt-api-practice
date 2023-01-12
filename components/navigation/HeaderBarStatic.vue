<template>
  <header
    class="c-header-bar-static"
    :class="{ '-no-sticky': noSticky, '-sp-hide': spHide }"
  >
    <div class="c-header-bar-static__in">
      <h1 class="c-header-bar-static__title">
        <span :class="textSp && '_d-sm-none'">
          {{ text }}
        </span>
        <span v-if="textSp" class="_d-md-none">{{ textSp }}</span>
        <template v-if="labelText">
          <LabelTag :text="labelText" :styles="labelStyle" isRadiusSm />
        </template>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBarStatic',
  props: {
    text: {
      type: String,
      default: null,
    },
    textSp: {
      type: String,
      default: null,
    },
    labelText: {
      type: String,
      default: null,
    },
    labelStyle: {
      type: String,
      default: null,
    },
    noSticky: {
      type: Boolean,
      default: false,
    },
    spHide: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>
