<template>
  <a class="c-card-favorite" :href="link">
    <figure class="c-card-favorite__image">
      <img :src="image" width="72" height="72" decoding="async" :alt="name" />
    </figure>
    <p class="c-card-favorite__name">
      {{ name }}
    </p>
  </a>
</template>

<script>
export default {
  name: 'CardFavorite',
  props: {
    link: {
      type: String,
      default: '#',
    },
    image: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
