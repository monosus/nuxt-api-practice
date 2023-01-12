<template>
  <a :href="link" class="c-card-post-item" :class="{ '-is-top': isTop }">
    <div class="c-card-post-item__img">
      <img :src="src" decoding="async" width="256" height="144" :alt="text" />
    </div>
    <div class="c-card-post-item__content">
      <div v-if="tags.length > 0" class="c-card-post-item__tag">
        <LabelTag
          v-for="(tag, index) in tags"
          :key="index"
          isRadiusSm
          isWide
          :styles="tag.style"
          :text="tag.text"
        />
      </div>
      <div class="c-card-post-item__text">{{ text }}</div>
      <div class="c-card-post-item__date">{{ date }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    link: {
      type: String,
      default: null,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    src: {
      type: String,
      required: true,
      default: new URL(
        `@/assets/image/member/common/img_card_post_default_pc.jpg`,
        import.meta.url
      ),
    },
    text: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    isTop: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return {
      props,
    }
  },
}
</script>
