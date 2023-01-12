<template>
  <div class="c-wrapper-member">
    <aside class="c-wrapper-member__nav" :class="{ '-sp-hide': spHide }">
      <NavGlobalMember :current="current" :pageTitle="pageTitle">
        <template v-if="$slots.spButton" #spButton>
          <slot name="spButton"></slot>
        </template>
      </NavGlobalMember>
    </aside>
    <main class="c-wrapper-member__content">
      <div class="c-wrapper-member__main">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutMember',
  props: {
    current: {
      type: Number,
      default: null,
    },
    spHide: {
      type: Boolean,
      default: false,
    },
    pageTitle: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
