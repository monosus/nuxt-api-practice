<template>
  <header
    class="c-header-bar-sticky"
    :class="{ '-pc-hide': pcHide, '-sp-hide': spHide }"
  >
    <div class="c-header-bar-sticky__in">
      <div class="c-header-bar-sticky__back">
        <a v-if="link" :href="link" class="c-header-bar-sticky__back-link">
          <img
            src="@/assets/image/common/ico_arrow_left.svg"
            width="24"
            height="24"
            decoding="async"
            alt=""
          />
        </a>
      </div>
      <div class="c-header-bar-sticky__title">
        <h1>
          <span :class="textSp && '_d-sm-none'">{{ text }}</span>
          <span v-if="textSp" class="_d-md-none">{{ textSp }}</span>
        </h1>
        <template v-if="labelText">
          <LabelTag :text="labelText" :styles="labelStyle" isRadiusSm />
        </template>
      </div>
      <div class="c-header-bar-sticky__button">
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBarSticky',
  props: {
    link: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    textSp: {
      type: String,
      default: null,
    },
    pcHide: {
      type: Boolean,
      default: false,
    },
    spHide: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
      default: null,
    },
    labelStyle: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
