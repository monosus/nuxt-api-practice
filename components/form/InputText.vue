<template>
  <input
    class="c-input-text"
    :class="{ '-error': hasError, '-lg': isLarge }"
    :type="type"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    isDisabled: {
      type: Boolean,
    },
    hasError: {
      type: Boolean,
    },
    isLarge: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const handleInput = ($event) => {
      emit('update:modelValue', $event.target.value)
    }

    return {
      props,
      handleInput,
    }
  },
}
</script>
