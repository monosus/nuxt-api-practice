<template>
  <div class="c-box-attach">
    <div
      v-for="(item, index) in listFile"
      :key="index"
      class="c-box-attach__item"
    >
      <ButtonAttach
        :text="item.text"
        :hasIcon="item.hasIcon"
        @delete="handleDelete(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxAttach',
  props: {
    listFile: {
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
