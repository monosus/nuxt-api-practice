<template>
  <div class="c-tab-list">
    <div class="c-tab-list__in">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="c-tab-list__button"
        :class="{ '-active': item.isActive }"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
