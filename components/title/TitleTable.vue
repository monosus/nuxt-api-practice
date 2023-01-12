<template>
  <p class="c-title-table">
    <span class="c-title-table__number">{{ total }}</span> 件中 <span class="c-title-table__number">{{ page }}</span> 件
  </p>
</template>

<script>
export default {
  name: 'TitleTable',
  props: {
    total: {
      type: String,
      default: null,
    },
    page: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
}
</script>
