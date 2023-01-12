<template>
  <label :for="label" class="c-input-radio" :class="{ '-lg': isLarge }">
    <input
      :id="label"
      class="c-input-radio__radio"
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="isDisabled"
    />
    <p class="c-input-radio__text">{{ text }}</p>
  </label>
</template>

<script>
export default {
  name: 'InputRadio',
  props: {
    label: {
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
  setup(props) {
    return {
      props,
    };
  },
}
</script>
