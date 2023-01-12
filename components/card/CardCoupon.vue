<template>
  <a
    class="c-card-coupon"
    :href="href"
    :target="isTargetBlank ? '_blank' : '_self'"
  >
    <figure class="c-card-coupon__figure">
      <img
        :src="image"
        :alt="text"
        class="c-card-coupon__image"
        decoding="async"
      />
    </figure>
    <p class="c-card-coupon__text">
      <span>{{ text }}</span>
    </p>
  </a>
</template>

<script>
export default {
  name: 'CardCoupon',
  props: {
    href: {
      type: String,
      required: true,
    },
    isTargetBlank: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
