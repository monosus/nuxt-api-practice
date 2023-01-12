<template>
  <a
    class="c-banner-service"
    :href="href"
    :class="[bannerType]"
  >
    <div class="c-banner-service__body">
      <div class="c-banner-service__heading">
        <h5 class="c-banner-service__title">{{ title }}</h5>
        <p class="c-banner-service__subtitle">{{ subtitle }}</p>
      </div>
      <p class="c-banner-service__text">{{ text }}</p>
      <div class="c-banner-service__office">
        <LogoOffice :src="officeLogo" :name="officeName" />
        <ButtonFavorite />
      </div>
    </div>
    <figure class="c-banner-service__figure">
      <img
        :src="getImage(src)"
        :alt="title"
        class="c-banner-service__image"
        decoding="async"
      />
      <figcaption class="c-banner-service__title">{{ title }}</figcaption>
    </figure>
  </a>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'BannerService',
  props: {
    href: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    officeLogo: {
      type: String,
      required: true,
    },
    officeName: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const getImage = (src) => {
      return new URL(`/assets/${src}`, import.meta.url)
    }
    const bannerType = computed(() => {
      return `-${props.type}`
    })
    return {
      props,
      getImage,
      bannerType,
    }
  },
}
</script>
