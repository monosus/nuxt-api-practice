<template>
  <div class="c-button-attach">
    {{ text }}
    <i v-if="hasIcon" class="c-button-attach__icon" @click="handleDelete"></i>
  </div>
</template>

<script>
export default {
  name: 'ButtonAttach',
  props: {
    text: {
      type: String,
      required: true,
    },
    hasIcon: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const handleDelete = () => {
      emit('delete')
    }

    return {
      props,
      handleDelete,
    }
  },
}
</script>
