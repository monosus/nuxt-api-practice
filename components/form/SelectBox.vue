<template>
  <div
    v-click-outside="handleClickOutside"
    class="c-select-box"
    :class="{ '-open': isOpen, '-lg': isLarge }"
    :style="getWidth"
  >
    <div
      class="c-select-box__label"
      :class="{ '-gray': placeholder === selection }"
      @click="toggleSelect"
    >
      {{ selection }}
    </div>
    <ul class="c-select-box__list">
      <li
        v-for="(item, index) in listOptions"
        :key="index"
        class="c-select-box__item"
        @click="handleSelectItem(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, computed, onMounted, watch } from 'vue'
import vClickOutside from 'click-outside-vue3'

export default {
  name: 'SelectBox',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
      default: null,
    },
    isLarge: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const listOptions = ref(null)
    const selection = ref('')
    const isOpen = ref(false)

    const toggleSelect = () => {
      isOpen.value = !isOpen.value
    }

    const handleSelectItem = (index) => {
      selection.value = listOptions.value[index]
      toggleSelect()
      emit('update:modelValue', selection.value)
    }

    const handleClickOutside = () => {
      isOpen.value = false
    }

    const getWidth = computed(() => {
      return props.width ? `--select-box-width: ${props.width}px` : null
    })

    onMounted(() => {
      listOptions.value = props.placeholder
        ? [props.placeholder, ...props.options]
        : props.options
      selection.value = props.modelValue || listOptions.value[0]
    })

    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue !== selection.value) {
          selection.value = newValue
        }
      }
    )

    return {
      props,
      listOptions,
      selection,
      isOpen,
      toggleSelect,
      handleSelectItem,
      handleClickOutside,
      getWidth,
    }
  },
}
</script>
