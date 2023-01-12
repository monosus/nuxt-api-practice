<template>
  <div class="c-notice-bar">
    <div class="c-notice-bar__tag">
      <LabelTag text="重要" styles="red" isWide />
    </div>
    <TransitionGroup
      :duration="200"
      @enter="onAnimateEnter"
      @leave="onAnimateLeave"
      @after-leave="onAnimationAfterLeave"
    >
      <div v-if="isOpen" key="animation" class="c-notice-bar__animation" />
      <ul ref="listRef" key="list" class="c-notice-bar__list">
        <li v-for="(item, index) in noticeList" :key="index">
          <a :href="item.link" class="c-notice-bar__link">
            <p class="c-notice-bar__date">{{ item.date }}</p>
            <p class="c-notice-bar__text">
              <span>{{ item.text }}</span>
            </p>
          </a>
        </li>
      </ul>
    </TransitionGroup>
    <div class="c-notice-bar__control">
      <div
        class="c-notice-bar__button"
        :class="isOpen && '-is-open'"
        @click.prevent="toggleOpen"
      >
        <div v-if="noticeList.length > 0" class="c-notice-bar__preview">
          {{ noticeList[0].text }}
        </div>
        <div class="c-notice-bar__button-text">
          <span class="_d-sm-none">
            {{ isOpen ? '閉じる' : `全${noticeList.length}件を見る` }}
          </span>
          <span class="_d-md-none">
            {{ isOpen ? '重要なお知らせ' : `全${noticeList.length}件` }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NoticeBar',
  props: {
    noticeList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const listRef = ref(null)
    const isOpen = ref(false)

    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }

    const onAnimateEnter = () => {
      listRef.value.style.maxHeight = `${listRef.value.scrollHeight}px`
    }

    const onAnimateLeave = () => {
      const liHeight = window.matchMedia('(max-width: 896px)').matches
        ? 0
        : listRef.value.querySelector('li').offsetHeight
      listRef.value.style.maxHeight = `${liHeight}px`
    }

    const onAnimationAfterLeave = () => {
      listRef.value.removeAttribute('style')
    }

    return {
      props,
      listRef,
      isOpen,
      toggleOpen,
      onAnimateEnter,
      onAnimateLeave,
      onAnimationAfterLeave,
    }
  },
}
</script>
