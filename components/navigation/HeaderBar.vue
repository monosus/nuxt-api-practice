<template>
  <header ref="headerRef" class="c-header-bar">
    <div class="c-header-bar__in">
      <h1 class="c-header-bar__title">
        <span>{{ pageTitle }}</span>
        <template v-if="labelText">
          <LabelTag :text="labelText" :styles="labelStyle" />
        </template>
      </h1>
      <div class="c-header-bar__button">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    pageTitle: {
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
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>
