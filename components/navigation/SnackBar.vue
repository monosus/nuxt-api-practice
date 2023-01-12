<template>
  <div v-if="isShow" class="c-snack-bar">
    <div class="c-snack-bar__in">
      <p class="c-snack-bar__text">{{ text }}</p>
      <div class="c-snack-bar__button" @click="handleSnackBarClose">閉じる</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnackBar',
  props: {
    text: {
      type: String,
      default: null,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleSnackBarClose = () => {
      emit('close')
    }

    return {
      props,
      handleSnackBarClose,
    }
  },
}
</script>
