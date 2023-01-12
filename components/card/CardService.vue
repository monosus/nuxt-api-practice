<template>
  <a
    class="c-card-service"
    :href="href"
    :target="isTargetBlank ? '_blank' : '_self'"
  >
    <figure class="c-card-service__figure">
      <img
        :src="getImage(src)"
        :alt="title"
        class="c-card-service__image"
        decoding="async"
      />
      <figcaption class="c-card-service__title">{{ title }}</figcaption>
      <div v-if="balloon" class="c-card-service__balloon">
        <LabelText :text="balloon" />
      </div>
    </figure>
    <div class="c-card-service__body">
      <p class="c-card-service__text">{{ text }}</p>
      <div class="c-card-service__office">
        <LogoOffice :src="officeLogo" :name="officeName" />
        <ButtonFavorite />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardService',
  props: {
    href: {
      type: String,
      required: true,
    },
    isTargetBlank: {
      type: Boolean,
      default: false,
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
    balloon: {
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
  },
  setup(props) {
    const getImage = (src) => {
      return new URL(`/assets/${src}`, import.meta.url)
    }

    return {
      props,
      getImage,
    }
  },
}
</script>

