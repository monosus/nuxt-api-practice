<template>
  <div class="c-box-faq" :class="[isOpen && '-open']">
    <div class="c-box-faq__question" @click="toggleFaq">
      <slot name="question"></slot>
    </div>
    <div ref="faqRef" class="c-box-faq__answer">
      <div class="c-box-faq__answer-in">
        <slot name="answer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'BoxFaq',
  setup() {
    const faqRef = ref(null)
    const isOpen = ref(false)

    const setFaqHeight = () => {
      faqRef.value.style.maxHeight = isOpen.value
        ? `${faqRef.value.scrollHeight}px`
        : 0
    }

    const toggleFaq = () => {
      isOpen.value = !isOpen.value
      setFaqHeight()
    }

    return {
      faqRef,
      isOpen,
      toggleFaq,
    }
  },
}
</script>
