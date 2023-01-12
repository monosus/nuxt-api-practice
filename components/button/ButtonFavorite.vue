<template>
  <button
    type="button"
    class="c-button-favorite"
    :class="[favorite && '-active', { '-text': text }]"
    @click.prevent="handleClick"
  >
    <div class="c-button-favorite__icon">
      <svg id="FavStar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          id="Path_11006"
          data-name="Path 11006"
          d="M0,0H32V32H0Z"
          fill="none"
        />
        <path
          id="Path_11007"
          data-name="Path 11007"
          d="M15.092,22.1l6.893,4.16a.669.669,0,0,0,1-.72L21.159,17.7l6.08-5.267a.671.671,0,0,0-.387-1.173l-8.013-.68L15.706,3.192a.664.664,0,0,0-1.227,0l-3.133,7.387-8.013.68a.668.668,0,0,0-.373,1.173L9.039,17.7l-1.827,7.84a.669.669,0,0,0,1,.72Z"
          transform="translate(0.908 0.928)"
          fill="currentColor"
          stroke="#e9ecef"
          stroke-width="1"
        />
      </svg>
    </div>
    <p v-if="text" class="c-button-favorite__text">
      {{ favorite && textActive ? textActive : text }}
    </p>
  </button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ButtonFavorite',
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: null,
    },
    textActive: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const favorite = ref(props.isFavorite)

    const handleClick = () => {
      favorite.value = !favorite.value
    }

    return {
      props,
      favorite,
      handleClick,
    }
  },
}
</script>
