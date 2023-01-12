<template>
  <div class="c-nav-global-popup">
    <div class="c-nav-global-popup__in">
      <div class="c-nav-global-popup__main" :class="`-${color}`">
        <a class="c-nav-global-popup__link" :href="main.linkUrl">
          <figure class="c-nav-global-popup__image">
            <img
              :src="main.image"
              width="256"
              height="120"
              decoding="async"
              :alt="main.linkText"
            />
          </figure>
          <p class="c-nav-global-popup__link-text">
            {{ main.linkText }}
          </p>
          <p class="c-nav-global-popup__text">{{ main.text }}</p>
        </a>
      </div>
      <ul class="c-nav-global-popup__nav">
        <li v-for="(item, index) in sub" :key="index">
          <p v-if="item.title" class="c-nav-global-popup__title">
            {{ item.title }}
          </p>
          <a class="c-nav-global-popup__link" :href="item.linkUrl">
            <p class="c-nav-global-popup__link-text">
              {{ item.linkText }}
            </p>
            <p class="c-nav-global-popup__text -line-clamp">
              {{ item.text }}
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavGlobalPopup',
  props: {
    color: {
      type: String,
      default: 'purple',
    },
    main: {
      type: Object,
      default: () => {},
    },
    sub: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
