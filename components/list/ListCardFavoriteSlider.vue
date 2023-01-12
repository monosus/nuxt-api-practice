<template>
  <div class="c-list-card-favorite-slider">
    <Swiper v-bind="swiperOptions">
      <SwiperSlide v-for="(item, index) in favoriteList" :key="index">
        <CardFavorite v-bind="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  name: 'ListCardFavoriteSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    favoriteList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const swiperOptions = {
      slidesPerView: 'auto',
      spaceBetween: 24,
      resistanceRatio: 0,
      breakpoints: {
        897: {
          spaceBetween: 32,
        },
      },
    }

    return {
      props,
      swiperOptions,
    }
  },
}
</script>
