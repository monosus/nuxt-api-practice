<template>
  <div class="c-wrapper">
    <aside class="c-wrapper__nav">
      <NavGlobal :isUserMenuOpen="isUserMenuOpen" :current="current" />
    </aside>
    <main class="c-wrapper__content">
      <HeaderBar
        :pageTitle="pageTitle"
        :labelText="labelText"
        :labelStyle="labelStyle"
      >
        <slot name="headerButton" />
      </HeaderBar>

      <div class="c-wrapper__main">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
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
    current: {
      type: Number,
      default: null,
    },
    isUserMenuOpen: {
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
