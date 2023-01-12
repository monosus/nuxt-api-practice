<template>
  <div class="c-list-thumbnail">
    <div
      v-for="(item, index) in imgUploads"
      :key="index"
      class="c-list-thumbnail__item"
    >
      <ImgThumbnail
        :src="item.src"
        :hasIcon="item.hasIcon"
        @delete="handleDelete(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListThumbnail',
  props: {
    imgUploads: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const handleDelete = (index) => {
      emit('delete', index)
    }

    return {
      props,
      handleDelete,
    }
  },
}
</script>
