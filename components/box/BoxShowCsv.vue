<template>
  <div class="c-box-show-csv">
    <p class="c-box-show-csv__text">選択したファイル：</p>
    <p class="c-box-show-csv__file">{{ file }}</p>
  </div>
</template>

<script>
export default {
  name: 'BoxShowCsv',
  props: {
    file: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>
