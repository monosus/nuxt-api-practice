<template>
  <ul class="c-list-card-default">
    <li
      v-for="(item, index) in cards"
      :key="index"
      class="c-list-card-default__item"
    >
      <CardDefault v-bind="item" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
