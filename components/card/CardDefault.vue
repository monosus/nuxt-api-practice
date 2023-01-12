<template>
  <a class="c-card-default" :href="href">
    <figure class="c-card-default__figure">
      <img
        class="c-card-default__image"
        :src="src"
        :alt="title"
        decoding="async"
      />
    </figure>
    <div class="c-card-default__body">
      <p class="c-card-default__title">{{ title }}</p>
    </div>
    <div class="c-card-default__footer">
      <LabelTag :text="tagText" :styles="tagStyle" isRadiusSm />
      <p class="c-card-default__date">{{ date }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardDefault',
  props: {
    href: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    tagText: {
      type: String,
      default: null,
    },
    tagStyle: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>
