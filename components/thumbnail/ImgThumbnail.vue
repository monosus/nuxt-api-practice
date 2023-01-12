<template>
  <div class="c-img-thumbnail">
    <img :src="src" decoding="async" alt="" />
    <i v-if="hasIcon" class="c-img-thumbnail__close" @click="handleDelete"></i>
  </div>
</template>

<script>
export default {
  name: 'ImgThumbnail',
  props: {
    src: {
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

