<template>
  <div class="c-list-comment">
    <ul class="c-list-comment__list">
      <li
        v-for="(item, index) in comments"
        :key="index"
        class="c-list-comment__item"
      >
        <p class="c-list-comment__text">{{ item.text }}</p>
        <div class="c-list-comment__info">
          <p class="c-list-comment__date">{{ item.date }}</p>
          <p class="c-list-comment__author">{{ item.author }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListComment',
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>
