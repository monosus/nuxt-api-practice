<template>
  <div class="c-form-group" :class="[textSpace]">
    <p v-if="label" class="c-form-group__label">
      {{ label }}
      <span v-if="label && sub" class="c-form-group__sub">{{ sub }}</span>
      <span v-if="label && caution" class="c-form-group__caution">{{
        caution
      }}</span>
      <span v-if="label && isOptional" class="c-form-group__optional"
        >（任意）</span
      >
    </p>
    <slot></slot>
    <!-- eslint-disable vue/no-v-html -->
    <p v-if="suggestText" class="c-form-group__suggest" v-html="suggestText"></p>
    <!--eslint-enable-->
    <p v-if="errorText" class="c-form-group__error">{{ errorText }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FormGroup',
  props: {
    label: {
      type: String,
      default: null,
    },
    sub: {
      type: String,
      default: null,
    },
    caution: {
      type: String,
      default: null,
    },
    suggestText: {
      type: String,
      default: null,
    },
    errorText: {
      type: String,
      default: null,
    },
    space: {
      type: String,
      default: null,
    },
    isOptional: {
      type: Boolean,
    },
  },
  setup(props) {
    const textSpace = computed(() => {
      let space = ''

      if (props.space === 'md') {
        space = 'md'
      } else if (props.space === 'lg') {
        space = 'lg'
      }

      return space ? `-${space}` : ''
    })

    return {
      props,
      textSpace,
    }
  },
}
</script>
