<template>
  <label class="c-input-checkbox" :class="{ '-no-text': !text, '-lg': isLarge }">
    <input
      :id="id"
      class="c-input-checkbox__checkbox"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="handleChange"
    />
    <p v-if="text" class="c-input-checkbox__text">{{ text }}</p>
  </label>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: {
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    isChecked: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    text: {
      type: String,
      default: null,
    },
    isLarge: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const handleChange = ($event) => {
      emit('action', $event)
    }

    return {
      props,
      handleChange,
    }
  },
}
</script>
