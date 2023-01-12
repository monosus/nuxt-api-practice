<template>
  <div class="c-box-memo-item">
    <p class="c-box-memo-item__date">{{ date }}</p>
    <p class="c-box-memo-item__name">{{ name }}</p>
    <p class="c-box-memo-item__info">{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: 'BoxMemoItem',
  props: {
    date: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    info: {
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
